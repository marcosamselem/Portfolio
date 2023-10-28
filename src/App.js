import './App.css';
// import Spline from '@splinetool/react-spline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import data from './data/projectData'
import Footpage from './components/Footpage'
import Navbar from "./components/Navbar"
function App() {
  return (
    <main>
     {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> */}
     <div>
      <Navbar />
     <About />
     <Skills />
     <div id="projects">
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
      </div>
      <Footpage />
  </div>
    </main>
  );
}

export default App;
