import React, { useState, useEffect }from "react";
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

    const [hidden, setHidden] = useState(false);

    const handleScroll = () => {
      setHidden(window.scrollY > 20);
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
          <p className="change-color link-to">Home</p>
        </Link>
        <p className="change-color" onClick={() => scrollToSection('about')}>About</p>
        <p className="change-color" onClick={() => scrollToSection('skills')}>Skills</p>
        <p className="change-color" onClick={() => scrollToSection('projects')}>Projects</p>
        <p className="change-color" onClick={() => scrollToSection('contact')}>Contact</p>
    </nav>
  )
}

export default Navbar;
