import React from "react";
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="flex-bar">
      <Link to="/" className="link-to"><p>Home</p></Link>
      <Link to='/about' className="link-to">About me</Link>
      <Link to='/skills' className="link-to">My skills</Link>
      <Link to="/projects" className="link-to">My projects</Link>
    </nav>
  )
}

export default Navbar;
