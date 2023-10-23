import React from "react"

function Projects(props) {
  console.log(props)
  return (
    <main className="card">
      <div className="place-in-center">
        <h1><strong>{props.title}</strong></h1>
      </div>
      <div  className="place-in-center">
        <img className="img-size" src={props.image} alt="" />
      </div>
      <h2 className="margin-card">Project length: {props.length}</h2>
      <h2 className="margin-card">Skills used: {props.skills}</h2>
      <h2 className="margin-card">Project description: {props.description}</h2>
    </main>
  )
}


export default Projects
