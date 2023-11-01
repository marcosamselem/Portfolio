import React, { useState, useEffect} from "react"

const Skills = () => {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);

    const handleToggleList = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
      setHide(true);
    };

  const handleScrollHide = () => {
    setHide(false);
  };

  const handleBackendList = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 10;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
    setShow(true);
  }

  const handleScrollShow = () => {
    setShow(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollShow);
    return () => {
      window.removeEventListener('scroll', handleScrollShow); };
    }, []);

  useEffect(() => {
      window.addEventListener('scroll', handleScrollHide);
      return () => {
        window.removeEventListener('scroll', handleScrollHide); };
      }, []);

  return(
    <div id="skills">
      <div className="skills-title">My Skills</div>
      <div className="flex-d">
        <p  onClick={() => handleToggleList("front")}
            className="front-end"> Front-end </p>
        <p onClick={() => handleBackendList("back")}
        className="back-end">Back-end</p>
      </div>
      <div className="flex-lists">
            {hide &&
              <ul id="front" className="front-list">
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
            <ul id="back" className="back-list">
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


// set an id for each ul
// set an onclick event that changes the value to true and zooms in to the div id
