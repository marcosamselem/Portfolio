import React, { useState, useEffect} from "react"

const Skills = () => {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const zoomTimer = setTimeout(() => {
      setHide(true);
      setShow(true);
    }, 300);
      return () => {
        clearTimeout(zoomTimer);
      };
    }, []);

  const handleToggleList = () => {
    setHide(true);
  };
  const handleToggleListErase = () => {
    setHide(false);
  };

  const handleBackendList = () => {
    setShow(true);
  }

  const handleBackendListErase = () => {
      setShow(false);
    }

  return(
    <div id="skills">
      <div className="skills-title">My Skills</div>
      <div className="flex-d">
        <p  onMouseEnter={handleToggleList}
            onMouseLeave={handleToggleListErase}
            className="front-end"> Front-end </p>
        <p onMouseEnter={handleBackendList}
        onMouseLeave={handleBackendListErase}
        className="back-end">Back-end</p>
      </div>
      <div className="flex-lists">
            {hide &&
              <ul className={"front-list zoomed-list"}>
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
          {show &&
            <ul className={"back-list zoomed-list"}>
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
    </div>
  )
}

export default Skills
