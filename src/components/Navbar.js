import React, { useState, useEffect }from "react";
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
    const [hidden, setHidden] = useState(false);

    const handleScroll = () => {
      setHidden(window.scrollY > 50);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



  return (
    <nav className={hidden ? 'flex-bar hidden' : 'flex-bar'}>
        <Link style={{textDecoration: "none"}}to="/">
        <p className="link-to">Home</p>
        </Link>
        <p onClick={() => scrollToSection('about')}>About</p>
        <p onClick={() => scrollToSection('skills')}>Skills</p>
        <p onClick={() => scrollToSection('projects')}>Projects</p>
    </nav>
  )
}

export default Navbar;
