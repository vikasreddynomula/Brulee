import React from "react";
import "./Reservations.css";

const Reservations = () => {
  return (
    <div className="booktable-container">
      {/* Header Section */}

      {/* Hero Strip */}
      <div className="hero-strip"></div>

      {/* Main Content */}
      <main className="booktable-content">
        <h1>Book a Table</h1>
        <p>
        Discover why Brûlée Chicago is setting the new standard for brunch in the city. From indulgent dishes to handcrafted cocktails, every moment is designed to delight. Book your reservation and taste what Chicago’s been craving.
        </p>

        {/* Location Section */}
        <div className="location-section">
          <div className="location-block">
            <div className="location-title">CHICAGO</div>
            <p className="location-address">
            2036 S. Michigan Ave, Chicago, IL, 60616
            </p>
            <a
              href="https://www.eventbrite.com/e/brulee-grand-opening-tickets-1962583743809?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="reserve-btn"
            >
              Reserve A Table
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reservations;
