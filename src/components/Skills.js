import React, { useState } from "react";
import SkillDisplayer from "./SkillDisplayer";
import { frontEnd, backEnd } from "../data/programmingLanguages";

const Skills = () => {
  const [showFrontSkills, setShowFrontSkills] = useState(false);
  const [showBackSkills, setShowBackSkills] = useState(false);

  const handleMouseEnter = () => {
    setShowFrontSkills(true);
  };

  const handleMouseLeave = () => {
    setShowFrontSkills(false);
  };

  const handleMouseEnterBack = () => {
    setShowBackSkills(true)
  };

  const handleMouseLeaveBack = () => {
    setShowBackSkills(false)
  };

  return (
    <div style={{height: "60vh"}}id="skills">
      <div className="skills-title">My Skills</div>
      <div>
        <div className="flex-d">
          <div style={{padding: "0", height: "40vh", width: "28vw"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showFrontSkills ? <SkillDisplayer languages={frontEnd} /> : <p className="extended-list">Front-end</p>}
          </div>
          <div style={{padding: "0", height: "40vh", width: "28vw"}} onMouseEnter={handleMouseEnterBack} onMouseLeave={handleMouseLeaveBack}>
            {showBackSkills ? <SkillDisplayer languages={backEnd} /> : <p className="extended-list">Back-end</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
