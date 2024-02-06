import React from "react";
import "../App.css";


const SkillDisplayer = ({style, skills}) => {
  return (
    <div className={style}>
      <ul >
        {skills.map((skill)=>{
          return(
            <li>{skill}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default SkillDisplayer
