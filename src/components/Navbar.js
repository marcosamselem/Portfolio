import React, { useState, useEffect }from "react";
import '../App.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import pdfFile from '../files/Cvfile.pdf';

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


    const downloadCv = () => {
      window.open(pdfFile);
    }

    const largeScreenComponent = (
    <nav style={navbarStyle} className='flex-bar'>
        <div className="change-color" onClick={downloadCv}>Cv</div>
        <Link style={{textDecoration: "none"}} to="/">
          <p className="change-color link-to">Home</p>
        </Link>
        <p className="change-color" onClick={() => scrollToSection('about')}>About</p>
        <p className="change-color" onClick={() => scrollToSection('skills')}>Skills</p>
        <p className="change-color" onClick={() => scrollToSection('projects')}>Projects</p>
        <p className="change-color" onClick={() => scrollToSection('contact')}>Contact</p>
    </nav>
    )

    const [isSticky, setIsSticky] = useState(false)
    const [mobileNavbar, setMobileNavbar] = useState(false);

    const toggleMobileNavbar = () => {
        setMobileNavbar(!mobileNavbar)
    }

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;

        // Adjust the offset value as needed
        if (offset > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const navbarOpened = (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`} onClick={toggleMobileNavbar}>
      <i class="fa-solid fa-2xl fa-bars fa-rotate-90" style={{color: "#255067", marginTop: "30px", marginLeft: "10px"}}></i>
      <nav className='mobile-navbar'>
        <Link style={{textDecoration: "none"}} to="/">
          <p style={{color: "white", width: "65px"}} className="change-color link-to">Home</p>
        </Link>
        <p style={{color: "white", width: "75px"}} className="change-color" onClick={() => scrollToSection('about')}>About</p>
        <p style={{color: "white", width: "90px"}} className="change-color" onClick={() => scrollToSection('skills')}>Skills</p>
        <p style={{color: "white", width: "120px"}} className="change-color" onClick={() => scrollToSection('projects')}>Projects</p>
        <p style={{color: "white", contact: "90px"}} className="change-color" onClick={() => scrollToSection('contact')}>Contact</p>
        <p style={{color: "white", width: "65px"}} className="change-color" onClick={downloadCv}>Cv</p>
    </nav>
    </div>
)

    const navbarClosed = (
      <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <i onClick={toggleMobileNavbar} class="fa-solid fa-2xl fa-bars" style={{color: "#255067", marginTop: "30px", marginLeft: "10px"}}></i>
      </div>
    )

    const smallScreenComponent = mobileNavbar ? navbarOpened : navbarClosed;

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return isSmallScreen ? smallScreenComponent : largeScreenComponent;
}

export default Navbar;
