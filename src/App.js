import './App.css';
// import Spline from '@splinetool/react-spline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Web from './components/Web'
import data from "./data/projectData"

function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Web />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
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
      </Router>
    </main>
  );
}

export default App;
