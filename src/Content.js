import React from 'react';
import './Content.css';
import logo from './images/LOGO_BRULEE4.png';
import background from './images/DSC04844.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Content = () => (
  <div className="content-section" id="content-section" >
    <div className="verticalBox">
    <img src={background} alt="background" className="background-img" />
    <h1 className="t1" style={{textAlign:"center",color:"white"}}>Coming Soon!</h1>
    <img src={logo} alt="Brulee Logo" className="logo-image" style={{alignItems:"right"}}/>
    
<div className="social-follow">
        <p style={{ color: "white",fontStyle:"bold"}}>Follow us on Instagram</p>
        <a href="https://www.instagram.com/bruleechicago?igsh=Z3hmbTM4d3BhcjNl" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="1x" color="white" />
        </a>
      </div>
</div>
  </div>
);

export default Content;