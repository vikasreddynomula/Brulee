import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt} from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h3>Visit Us</h3>
      <p>2036 S. Michigan Ave, Chicago, IL, 60616</p>
      <p className="footer-location">
        <FaMapMarkerAlt className="footer-icon" /> Our Location
      </p>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/d/embed?mid=1rpo6-skvN4rzfT0vP-0VaF8rehR6YRI&ehbc=2E312F&noprof=1"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="hours-card" id="hours">
        <div className="hours-header">
          <h4 style={{textAlign:"center"}}>Hours of Operation</h4>
        </div>
        <div className="hours-list">
          <p>Mon – Tue: 7AM – 3PM</p>
          <p>Wed: <span className="closed">Closed</span></p>
          <p>Thu – Fri: 7AM – 3PM</p>
          <p>Sat – Sun: 8AM – 4PM</p>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© Brulee Chicago / All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
