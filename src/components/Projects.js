import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';

const Projects = (props) => {
  return (
      <main>
      <Link style={{textDecoration: "none"}} to={props.link}>
      <div className="card">
        <div className="place-in-center">
          <h1><strong>{props.title}</strong></h1>
        </div>
        <div className="place-in-center">
          <img className="img-size" src={props.image} alt="" />
        </div>
        <h2 className="margin-card">Project length: {props.length}</h2>
        <h2 className="margin-card">Skills: {props.skills}</h2>
        <h2 className="margin-card">Project description: {props.description}</h2>
      </div>
      </Link>
      </main>
  );
};

export default Projects;
