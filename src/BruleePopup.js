import React, {useState } from 'react';

import './BruleePopup.css';

const BruleePopup = () => {
  const [showModal, setShowModal] = useState(true);


  if (!showModal) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={() => setShowModal(false)}>×</button>
        <img src="/images/LOGO_BRULEE4.png" alt="Brulee Logo" className="logo-image" />
        <h3 className="popup-subtitle">Meaning: “To Burn”</h3>
        <p className="popup-phonetic">/broo-LAY/ noun</p>
        <p className="popup-description">
          A crisp layer of caramelized sugar achieved through direct flame or intense heat.<br />
          The brûlée-ing process adds a delicious bittersweet flavor and a satisfying crackle to the dish.
        </p>
      </div>
    </div>
  );
};

export default BruleePopup;
