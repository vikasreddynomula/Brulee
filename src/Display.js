import React from 'react';
import Card from './Card';

import './Display.css';

const Display = () => {
  return (
    <div className='card-wrapper'>
      <Card
        location="SouthLoop"
        image={"/images/DSC04818.jpg"}
        menuLink="/menu"
      />
      <div className="location-card" >
      <div
  style={{
    backgroundImage: `url("/images/DSC04825.jpg")`,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
></div>

        </div>
    </div>
  );
};

export default Display;
