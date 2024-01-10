import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onHomeClick, onAboutMeClick, onTechStackClick, onProjectsClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <nav className="bg-cherry-pink p-4 fixed top-0 left-0 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Link onClick={onHomeClick} to="/" className="text-white text-xl font-bold">
            Home
          </Link>
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <div className={`w-6 h-px bg-white ${isMenuOpen ? 'transform rotate-45 translate-y-1' : ''} mb-1`}></div>
            <div className={`w-6 h-px bg-white ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-px bg-white ${isMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''} mt-1`}></div>
          </div>
          <ul className={`md:flex md:space-x-4 md:items-center ${isMenuOpen ? 'flex flex-col items-center absolute top-16 left-0 w-full bg-cherry-pink' : 'hidden'}`}>
            <li onClick={() => { onAboutMeClick(); closeMenu(); }}>
              <Link to="/about" className="text-white hover:text-gray-200">
                About Me
              </Link>
            </li>
            <li onClick={() => { onTechStackClick(); closeMenu(); }}>
              <Link to="/tech-stack" className="text-white hover:text-gray-200">
                Tech Stack
              </Link>
            </li>
            <li onClick={() => { onProjectsClick(); closeMenu(); }}>
              <Link to="/projects" className="text-white hover:text-gray-200">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
