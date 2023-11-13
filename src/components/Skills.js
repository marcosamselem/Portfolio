import React, { useState } from "react";
import SkillDisplayer from "./SkillDisplayer";
import { frontEnd, backEnd } from "../data/programmingLanguages";
import { useMediaQuery } from 'react-responsive';

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

  const largeScreen = (
    <div className="displayment-list" id="skills">
    <div className="skills-title">My Skills</div>
    <div>
      <div className="flex-d">
        <div className="skills-list-style" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {showFrontSkills ? <SkillDisplayer languages={frontEnd} /> : <p className="extended-list">Front-end</p>}
        </div>
        <div className="skills-list-style" onMouseEnter={handleMouseEnterBack} onMouseLeave={handleMouseLeaveBack}>
          {showBackSkills ? <SkillDisplayer languages={backEnd} /> : <p className="extended-list">Back-end</p>}
        </div>
      </div>
    </div>
  </div>
  )

  const smallScreen = (
    <div className="displayment-list-mobile" id="skills">
    <div className="skills-title">My Skills</div>
    <div>
      <div className="flex-d">
        <div className="skills-list-style" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {showFrontSkills ? <SkillDisplayer languages={frontEnd} /> : <p className="extended-list">Front-end</p>}
        </div>
        <div className="skills-list-style" onMouseEnter={handleMouseEnterBack} onMouseLeave={handleMouseLeaveBack}>
          {showBackSkills ? <SkillDisplayer languages={backEnd} /> : <p className="extended-list">Back-end</p>}
        </div>
      </div>
    </div>
  </div>
  )

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    isSmallScreen ? smallScreen : largeScreen
  );
};

export default Skills;
