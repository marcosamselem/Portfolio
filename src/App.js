import './App.css';
// import Spline from '@splinetool/react-spline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';

function App() {

  return (
    <Router>
      <Routes>
        {/* Route for Home component */}
        <Route path="/" element={<Home />} />
        {/* Route for About component */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
