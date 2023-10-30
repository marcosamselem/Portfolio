import './App.css';
// import Spline from '@splinetool/react-spline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Web from "./components/Web"

function App() {
  return (
    <main>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;
