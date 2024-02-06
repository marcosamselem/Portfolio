import React from "react"
import "../App.css"
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import data from '../data/projectData'
import Footpage from './Footpage'
import Navbar from "./Navbar"
import SkillDisplayer from "./SkillDisplayer"
import programmingLanguages from "../data/programmingLanguages"

const Web= () => {
  return(
  <div>
    <div>
      <Navbar />
      <About />
      <Skills />
      {programmingLanguages.map(item => {
        return(
            <SkillDisplayer
              key={item.id}
              skills={item.skills}
              style={item.styleClass}
            />
          )
        })
      }
      <div id="projects">
      <h1 className='projects-style'>My Projects</h1>
      <div className="cards-mobile">
        <div className="card-disposition">
          {data.map(item => {
              return(
                <Projects
                  key={item.id}
                  title={item.title}
                  image={item.imageUrl}
                  length={item.projectLength}
                  skills={item.skillsUsed}
                  description={item.projectDescription}
                  link={item.link}
                />
              )
            })
          }
        </div>
      </div>
    </div>
    <Footpage />
    </div>
  </div>)
}

export default Web
