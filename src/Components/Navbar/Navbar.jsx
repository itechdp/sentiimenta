import React, { useState } from 'react'
import logo from '../../assets/logo2.png'
import './Navbar.css'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      setSticky(true)
    }
    else {
      setSticky(false)
    }
  })
  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={` ${sticky ? 'active' : ''}`}>
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('projects')}>Our Projects</li>
          <li onClick={() => scrollToSection('services')}>Services</li>
          <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
          <li className='contact' onClick={() => scrollToSection('contact')}>Contact Us</li>
        </ul>
        <i class="fa-solid fa-bars" onClick={showSidebar}></i>
      </div>
      <div className="nav-right">
        <a href="https://www.instagram.com/sentiimenta.ai" target='_blank'>
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/sentiimenta.ai/" target='_blank'>
        <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.facebook.com/sentiimenta" target='_blank'>
        <i class="fa-brands fa-facebook-f"></i>
        </a>
      </div>

      <ul className='sidebar'>
        <i class="fa-solid fa-xmark" onClick={hideSidebar}></i>
        <li onClick={() => { scrollToSection('home'); hideSidebar(); }}>Home</li>
        <li onClick={() => { scrollToSection('projects'); hideSidebar(); }}>Our Projects</li>
        <li onClick={() => { scrollToSection('services'); hideSidebar(); }}>Services</li>
        <li onClick={() => { scrollToSection('testimonials'); hideSidebar(); }}>Testimonials</li>
        <li className='contact' onClick={() => { scrollToSection('contact'); hideSidebar(); }}>Contact Us</li>
        <div className="icons">
        <a href="https://www.instagram.com/sentiimenta.ai" target='_blank'>
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/sentiimenta.ai/" target='_blank'>
        <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.facebook.com/sentiimenta" target='_blank'>
        <i class="fa-brands fa-facebook-f"></i>
        </a>
        </div>

      </ul>

    </nav>
  )
}

export default Navbar