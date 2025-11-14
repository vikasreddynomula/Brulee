import React, { useEffect } from "react";
import "./Reservations.css";

const Reservations = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.resy.com/embed.js";
    script.async = true;

    script.onload = () => {
      if (window.resyWidget) {
        window.resyWidget.addButton(
          document.getElementById("resyButton-kbfvS1OlqNpMIBxxdq7W5"),
          {
            venueId: 93970,
            apiKey: "MppPpuOrIDWc0kLUkG1j68LaZtLkFPa7",
            replace: true,
          }
        );
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="booktable-container">
      <div className="hero-strip"></div>

      <main className="booktable-content">
        <h1>Book a Table</h1>
        <p>
          Discover why Brûlée Chicago is setting the new standard for brunch
          in the city. From indulgent dishes to handcrafted cocktails, every
          moment is designed to delight. Book your reservation and taste what
          Chicago’s been craving.
        </p>

        {/* Location Section */}
        <div className="location-section">
          <div className="location-block">
            <div className="location-title">CHICAGO</div>
            <p className="location-address">
              2036 S. Michigan Ave, Chicago, IL, 60616
            </p>

            <div style={{ textAlign: "center",marginTop:"50px" }}>
              <a
                href="https://resy.com/cities/chicago-il/venues/brulee"
                id="resyButton-kbfvS1OlqNpMIBxxdq7W5"
              >
                Book 
              </a>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Reservations;
