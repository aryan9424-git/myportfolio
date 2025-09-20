import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png';
import contactImg from '../../assets/contact.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className={`desktopMenu ${menuOpen ? 'open' : ''}`}>
        <a href='#intro' to='/' className="desktopMenuListItem" smooth={true} duration={500}>Home</a>
        <a href='#Skills' className="desktopMenuListItem" to="about" smooth={true} duration={500}>About</a>
        <a href='#works' className="desktopMenuListItem" to="portfolio" smooth={true} duration={500}>Portfolio</a>
        <a href='#footer' className="desktopMenuListItem" to="clients" smooth={true} duration={500}>Clients</a>
      </div>

      <a href="#contact"><button className="desktopMenuBtn"><img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button></a>

      <button className="navbarBtn" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;