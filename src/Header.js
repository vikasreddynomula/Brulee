import './Header.css';
import logo from './images/LOGO_BRULEE4.png';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 864);
  const location = useLocation();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 864);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {

      handleScroll(id);
      setMenuOpen(false);
    }
  };
  

  return (
    <div className="header">
       <a href="/"><img src={logo} alt="Brulee Logo" className="logo-image" style={{ width: "70px" }} /> </a>

      {isMobile ? (
        <>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "white", fontSize: "40px" }}>&#9776;</div>
          {menuOpen && (
            <div className="mobile-fullscreen-menu">
              <div className="close-icon" onClick={() => setMenuOpen(false)}>&times;</div>
              <div className="menu-links">
              <button className="section" onClick={() => handleNavigation('hero')}>About Us</button>
                <a className="section" href="/menu">Menu</a>
                <button className="section" onClick={() => handleNavigation('hours')}>Open Hours</button>
                <button className="section" onClick={() => handleNavigation('catering')}>Catering</button>
                <button className="section" onClick={() => handleNavigation('privateevents')}>Private Events</button>
                <button className="section" onClick={() => handleNavigation('contactus')}>Contact</button>
                <button className="section" onClick={() => handleNavigation('loyaltymembers')}>Loyalty members</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="sections desktop">
          <button className="section" style={{border:"none"}}onClick={() => handleNavigation('hero')}>About Us</button>
          <Link className="section" to="/menu">Menu</Link>
          <a className="section" href="#hours">Open Hours</a>
          <a className="section" href="#catering">Catering</a>
          <a className="section" href="#privateevents">Private Events</a>
          <a className="section" href="#contactus">Contact</a>
          <a className="section" href="#loyaltymembers">Loyalty members</a>
        </div>
      )}
    </div>
  );
}

export default Header;
