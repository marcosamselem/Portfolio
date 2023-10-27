import React from "react"
import { Link } from 'react-router-dom';
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
    <img src={"/images/rectangle.png"} alt="" className='exploreButton' />
    </Link>
  </div>
  )
}

export default Home
