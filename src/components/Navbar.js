import React from "react";
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex-bar">
      <Link to="/" className="link-to"><p>Home</p></Link>
      <p>About me</p>
      <p>My skills</p>
      <p>My projects</p>
    </nav>
  )
}

export default Navbar
