import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container" id="aboutus">
      <section className="intro-section">
        <h1 className="heading">The Brûlée Story</h1>
        <p className="description">
          Born from a passion for unforgettable dining experiences, Brûlée was created to reimagine the modern breakfast and brunch scene. 
          Our founder, Chef Emani Roberts, combined a love for culinary innovation with a deep respect for regional flavors to bring a fresh, 
          elevated approach to the table. Every dish tells a story—rooted in community, crafted with care, and inspired by bold creativity.
        </p>
      </section>

      <section className="mission-section">
        <h2 className="subheading">Our Mission</h2>
        <blockquote className="mission-quote">
          “Our mission at Brûlée Chicago is to craft unforgettable dining experiences by blending vibrant regional flavors with innovative culinary techniques. 
          We are committed to sourcing the finest local ingredients, fostering a warm and inviting atmosphere, and providing exceptional service that reflects the 
          diverse and dynamic spirit of our community.”
        </blockquote>
      </section>

      <section className="chef-section">
        <h2 className="subheading">Meet the Chef</h2>
        <div className="chef-text">
          <h3 className="chef-name">Chef Emani Roberts</h3>
          <p>
            Chef Emani brings a unique blend of culinary artistry, formal training, and hands-on experience to Brûlée. A graduate of Kendall College and The Art 
            Institute of Atlanta, she sharpened her skills through an intense internship at Walt Disney World, followed by years in high-end kitchens. Her vision? 
            To create a space where every plate is a celebration of both flavor and connection.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
