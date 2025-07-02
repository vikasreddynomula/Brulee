import React from 'react';
import Card from './Card';
import img1 from './images/DSC04825.jpg';
import img2 from './images/DSC04818.jpg';
import './Display.css';

const Display = () => {
  return (
    <div className='card-wrapper'>
      <Card
        location="SouthLoop"
        image={img2}
        menuLink="/menu"
      />
      <div className="location-card" >
      <div
        
        style={{ backgroundImage: `url(${img1})`,width:"100%",height:"100%",position:"absolute",backgroundSize:"cover",backgroundPosition:"center" }}
      ></div>
        </div>
    </div>
  );
};

export default Display;
