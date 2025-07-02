import React from 'react';
import './Card.css';

const Card = ({ image, menuLink}) => {
  return (
    <div className="location-card">
      <div
        className="background-blur"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="overlay">
        <a href={menuLink} className="location-btn">VIEW MENU</a>
      </div>
    </div>
  );
};

export default Card;
