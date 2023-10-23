import React from "react"

const Skills = () => {
  return(
    <main>
      <h1 className="skills-title">My Skills</h1>
      <div className="flex-d">
        <p className="front-end">Front-end</p>
        <p className="back-end">Back-end</p>
      </div>
      <div className="flex-lists">
          <ul className="front-list">
            <li>css</li>
            <li>javascript</li>
            <li>react.js</li>
            <li>3d modelling</li>
            <li>figma</li>
            <li>stimulus.js</li>
            <li>Vue.js</li>
            <li>html</li>
            <li>bootstrap</li>
            <li>spline</li>
          </ul>
          <ul className="back-list">
            <li>Typescript</li>
            <li>Node.js</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HEROKU</li>
            <li>git</li>
            <li>git hub</li>
            <li>Restful APIs</li>
            <li>Redis</li>
            <li>Ajax</li>
          </ul>
        </div>
    </main>
  )
}

export default Skills
