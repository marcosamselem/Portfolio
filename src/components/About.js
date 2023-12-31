import React from 'react';
import "../App.css"
import ProfilePic from "../images/picture.png"
const About = () => {
  return (
    <div id="about" className="about-space">
      <div className="about-title">About me</div>
      <div className="flex-items">
        <div className="frame-paragraph">
          <p className="myself-info">
            I am a Full-Stack Web Developer who is passionate about making complex websites/apps
            easy and accessible to the user. In 2021 I founded a crypto start-up where I had the chance to enhance my
            knowledge in the Web Development field in order to build a unique and robust product that
            would satisfy all users. I have experience in leading Web Development projects with teams
            of full-stack developers. I consider myself to be a quick learner eager to master new coding
            languages.
          </p>
        </div>
        <img className="profile-pic" src={ProfilePic} alt="" />
      </div>
    </div>

  )
}

export default About
