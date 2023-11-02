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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [lastScrollY]);

  const navbarStyle = {
      transition: 'top 0.3s',
      top: isVisible ? '0' : '-100px', // Adjust this based on the height of your navbar
      position: 'fixed',
      width: '100%',
      // Add other styles as needed
  };

  return (
    <nav style={navbarStyle} className='flex-bar'>
        <Link style={{textDecoration: "none"}} to="/">
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
