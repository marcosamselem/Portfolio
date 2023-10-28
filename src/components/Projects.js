import React from "react";
import "../App.css";

const Projects = (props) => {
  return (
      <div className="card">
        <div className="place-in-center">
          <h1><strong>{props.title}</strong></h1>
        </div>
        <div className="place-in-center">
          <img className="img-size" src={props.image} alt="" />
        </div>
        <h2 className="margin-card">Project length: {props.length}</h2>
        <h2 className="margin-card">Skills used: {props.skills}</h2>
        <h2 className="margin-card">Project description: {props.description}</h2>
      </div>
  );
};

export default Projects;
