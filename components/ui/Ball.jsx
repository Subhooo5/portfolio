import React, { Suspense, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const MAX_LIVE =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(pointer: coarse)").matches
    ? 8
    : 12;

const live = new Map(); // id -> { ready, lastUsed, isPinned, evict }
const waiting = []; // { id, isPinned, evict }
const subs = new Set();
const notify = () => subs.forEach((fn) => fn());

const pump = () => {
  let changed = false;
  while (waiting.length) {
    if (live.size >= MAX_LIVE) {
      let victimId = null;
      let victim = null;
      for (const [id, e] of live) {
        if (e.ready && !e.isPinned() && (!victim || e.lastUsed < victim.lastUsed)) {
          victimId = id;
          victim = e;
        }
      }
      if (!victim) break;
      victim.evict();
      live.delete(victimId);
      changed = true;
    }
    const w = waiting.shift();
    live.set(w.id, {
      ready: false,
      lastUsed: performance.now(),
      isPinned: w.isPinned,
      evict: w.evict,
    });
    changed = true;
  }
  if (changed) notify();
};

let pumpTimer = null;
const schedulePump = () => {
  if (pumpTimer) return;
  pumpTimer = setTimeout(() => {
    pumpTimer = null;
    pump();
  }, 0);
};

const hasContent = (canvas) => {
  try {
    if (!canvas || canvas.clientWidth < 8 || canvas.width < 8 || canvas.height < 8) {
      return false;
    }
    const c = document.createElement("canvas");
    c.width = c.height = 24;
    const ctx = c.getContext("2d");
    if (!ctx) return true;
    ctx.drawImage(canvas, 0, 0, 24, 24);
    const d = ctx.getImageData(0, 0, 24, 24).data;
    let n = 0;
    for (let i = 3; i < d.length; i += 4) if (d[i] > 16) n++;
    return n > 60;
  } catch (e) {
    return false;
  }
};

const StableFloat = ({
  children,
  phase,
  speed = 1,
  rotationIntensity = 1,
  floatIntensity = 1,
}) => {
  const ref = useRef(null);
  const base = useRef(phase.current); 
  useFrame((state) => {
    if (!ref.current) return;
    const t = base.current + state.clock.elapsedTime;
    phase.current = t;
    ref.current.rotation.x = (Math.cos((t / 4) * speed) / 8) * rotationIntensity;
    ref.current.rotation.y = (Math.sin((t / 4) * speed) / 8) * rotationIntensity;
    ref.current.rotation.z = (Math.sin((t / 4) * speed) / 20) * rotationIntensity;
    let y = Math.sin((t / 4) * speed) / 10;
    y = THREE.MathUtils.mapLinear(y, -0.1, 0.1, -0.1, 0.1);
    ref.current.position.y = y * floatIntensity;
    ref.current.updateMatrix();
  });
  return (
    <group>
      <group ref={ref} matrixAutoUpdate={false}>
        {children}
      </group>
    </group>
  );
};

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <StableFloat
      phase={props.phase}
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </StableFloat>
  );
};

const Ready = ({ onReady }) => {
  const invalidate = useThree((s) => s.invalidate);
  const gl = useThree((s) => s.gl);
  useEffect(() => {
    let frames = 0;
    let timer;
    let raf;
    let stopped = false;
    const check = () => {
      if (stopped) return;
      invalidate();
      raf = requestAnimationFrame(() => {
        if (stopped) return;
        frames++;
        if (frames >= 4 && hasContent(gl.domElement)) onReady();
        else timer = setTimeout(check, frames < 4 ? 0 : 100);
      });
    };
    check();
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []); 
  return null;
};

const BallCanvas = ({ icon }) => {
  const id = useRef({}).current;
  const glRef = useRef(null);
  const camRef = useRef(null);
  const savedCam = useRef(null); 
  const phase = useRef(Math.random() * 10000); 
  const hoverRef = useRef(false);
  const [, rerender] = useReducer((c) => c + 1, 0);
  const isLive = live.has(id); 
  const wasLive = useRef(false);
  const [ready, setReady] = useState(false);
  const [snapshot, setSnapshot] = useState(null);

  const takeSnapshot = useCallback(() => {
    try {
      const canvas = glRef.current && glRef.current.domElement;
      if (hasContent(canvas)) setSnapshot(canvas.toDataURL("image/png"));
    } 
    catch (e) {
      
    }
  }, []);

  const request = useCallback(
    (priority) => {
      if (live.has(id)) return;
      const queued = waiting.findIndex((q) => q.id === id);
      if (queued !== -1) {
        if (priority && queued > 0) waiting.unshift(waiting.splice(queued, 1)[0]);
        pump();
        return;
      }
      const w = {
        id,
        isPinned: () => hoverRef.current,
        evict: () => {
          takeSnapshot();
          if (camRef.current) savedCam.current = camRef.current.position.toArray();

          try {
            glRef.current && glRef.current.forceContextLoss();
          } 
          catch (e) {
            
          }
          setReady(false);
        },
      };
      if (priority) waiting.unshift(w);
      else waiting.push(w);
      pump();
    },
    [id, takeSnapshot]
  );

  useEffect(() => {
    const onChange = () => {
      const now = live.has(id);
      if (now !== wasLive.current) {
        wasLive.current = now;
        rerender();
      }
    };
    subs.add(onChange);
    request(false);
    return () => {
      subs.delete(onChange);
      live.delete(id);
      const i = waiting.findIndex((w) => w.id === id);
      if (i !== -1) waiting.splice(i, 1);
      wasLive.current = false;
      schedulePump();
    };
  }, [id, request]);

  const handleReady = useCallback(() => {
    takeSnapshot();
    const e = live.get(id);
    if (e) e.ready = true;
    setReady(true);
    pump();
  }, [id, takeSnapshot]);

  const handleEnter = () => {
    hoverRef.current = true;
    const e = live.get(id);
    if (e) e.lastUsed = performance.now();
    else request(true);
  };

  const handleLeave = () => {
    hoverRef.current = false;
    pump();
  };

  const showSnapshot = snapshot && !(isLive && ready);
  const cameraProp = useMemo(
    () => ({ position: savedCam.current || [0, 0, 5] }),
    [isLive]
  );

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      onPointerEnter={handleEnter}
      onPointerDown={handleEnter}
      onPointerLeave={handleLeave}
    >
      {showSnapshot && (
        <img
          src={snapshot}
          alt=''
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      )}
      {isLive && (
        <Canvas
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={cameraProp}
          style={showSnapshot ? { visibility: "hidden" } : undefined}
          onCreated={({ gl, camera }) => {
            glRef.current = gl;
            camRef.current = camera;
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} phase={phase} />
            <Ready onReady={handleReady} />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;