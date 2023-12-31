import React from "react";
import "../App.css";

const SkillDisplayer = ({languages}) => {
  return (
    <div className={'lists-style'} key="id">
      <ul >
        {languages.map((language)=>{
          return(
            <li>{language}</li>
          )
        })}

      </ul>
    </div>
  )
}

export default SkillDisplayer
