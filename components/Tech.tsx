import React from "react";
import BallCanvas from "./ui/Ball";
import SectionWrapper from "./ui/SectionWrapper";
import { technologies } from "../data/index";
const Tech = () => {
  return (
    <section id = "skills">
      <div className="py-20">
      <h1 className="heading mb-10 text-center">
        A collection of my{" "}
        <span className="text-purple">Technical Skills</span>
      </h1>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10 p-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
    </section>
    
  );
};

export default SectionWrapper(Tech, "");