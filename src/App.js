import React, {useEffect, useRef} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Home from './components/Home';
import './styles/tailwind.css';

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref, offset = 0) => {
    if (ref && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetTop = rect.top + scrollTop;
      const offsetTop = targetTop - offset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const calculateNavbarOffset = () => {
      return document.querySelector('.bg-cherry-pink').offsetHeight;
    };

    const navbarHandlers = {
      onHomeClick: () => scrollToSection(homeRef),
      onAboutMeClick: () => scrollToSection(aboutMeRef, calculateNavbarOffset()),
      onTechStackClick: () => scrollToSection(techStackRef, calculateNavbarOffset()),
      onProjectsClick: () => scrollToSection(projectsRef, calculateNavbarOffset()),
    };

    setNavbarHandlers(navbarHandlers);
  }, [aboutMeRef, homeRef, techStackRef, projectsRef]);

  const [navbarHandlers, setNavbarHandlers] = React.useState({
    onHomeClick: () => scrollToSection(homeRef),
    onAboutMeClick: () => scrollToSection(aboutMeRef),
    onTechStackClick: () => scrollToSection(techStackRef),
    onProjectsClick: () => scrollToSection(projectsRef),
  });

  return (
      <Router>
        <div>
          <Navbar {...navbarHandlers} />

          <div ref={homeRef}>
            <Home />
          </div>

          <div ref={aboutMeRef}>
            <AboutMe />
          </div>

          <div ref={techStackRef}>
            <TechStack />
          </div>

          <div ref={projectsRef}>
            <Projects />
          </div>
        </div>
      </Router>
  );
}

export default App;
