import React, { useState } from "react"

const Skills = () => {
  const [hide, setHide] = useState(false);
  const handleToggleList = () => {
    setHide(prevState => !prevState);
  };

  const [show, setShow] = useState(false);
  const handleBackendList = () => {
    setShow(prevState => !prevState);
  }

  return(
    <main>
      <h1 className="skills-title">My Skills</h1>
      <div className="flex-d">
        <p onClick={handleToggleList} className="front-end">Front-end</p>
        <p onClick={handleBackendList} className="back-end">Back-end</p>
      </div>
      <div className="flex-lists">
            {hide && <ul className="front-list">
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
            <li>3d modelling</li>
            <li>figma</li>
            <li>stimulus</li>
            <li>Vue</li>
            <li>html</li>
            <li>bootstrap</li>
            <li>spline</li>
          </ul>}
          {show && <ul className="back-list">
            <li>Typescript</li>
            <li>Node</li>
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
          </ul>}
        </div>
    </main>
  )
}

export default Skills
