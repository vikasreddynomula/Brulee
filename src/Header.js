import './Header.css';
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
       <a href="/"><img src={"/images/LOGO_BRULEE4.png"} alt="Brulee Logo" className="logo-image" style={{ width: "70px" }} /> </a>

      {isMobile ? (
        <>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "white", fontSize: "40px" }}>&#9776;</div>
          {menuOpen && (
            <div className="mobile-fullscreen-menu">
              <div className="close-icon" onClick={() => setMenuOpen(false)}>&times;</div>
              <div className="menu-links">
                <a className="section" href="/aboutUs">aboutUs</a>
                <a className="section" href="/menu">Menu</a>
                <a className="section" href="/reserve">Reservations</a>
                <button className="section" onClick={() => handleNavigation('hours')}>Open Hours</button>
                <button className="section" onClick={() => handleNavigation('catering')}>Catering</button>
                <a className="section" href="/privateevents">Private Events</a>
                <button className="section" onClick={() => handleNavigation('contactus')}>Contact</button>
                <button className="section" onClick={() => handleNavigation('loyaltymembers')}>Loyalty members</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="sections desktop">
          <Link className="section" to="/aboutUs">About Us</Link>
          <Link className="section" to="/menu">Menu</Link>
          <Link className="section" to="/reserve">Reservations</Link>
          <a className="section" href="#hours">Open Hours</a>
          <a className="section" href="#catering">Catering</a>
          <a className="section" href="/privateevents">Private Events</a>
          <a className="section" href="#contactus">Contact</a>
          <a className="section" href="#loyaltymembers">Loyalty members</a>
        </div>
      )}
    </div>
  );
}

export default Header;
