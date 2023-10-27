import React from 'react';
import "../App.css"
import Skills from './Skills';
import Projects from './Projects';
import Footpage from './Footpage';
import data from "../data/projectData"
import About from './About';

const Web = () => {
  return (
      <div>
         <About />
         <Skills />
         <h1 className='projects-style'>My Projects</h1>
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
          <Footpage />
      </div>

    );
}

export default Web;
