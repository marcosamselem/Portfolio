import React from "react"
import { Link } from 'react-router-dom';
import Rectangle from "../images/Rectangle.png";
import '../App.css';

const Home = () => {
  return (
    <div>
    <div className="title-1">Welcome to</div>
    <div className="title-2"> My portfolio</div>
    <div className="spline-explore">
      {/* <Spline scene="https://prod.spline.design/5qNBvrHiBNpIAGjn/scene.splinecode" /> */}
    </div>
    <Link to="/web">
      <div className="display-explore">
        <img src={Rectangle} alt="" className='exploreButton' />
      </div>
    </Link>
  </div>
  )
}

export default Home
