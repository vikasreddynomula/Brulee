import './HeroSection.css';

const HeroSection = () => {
  

  return (
    <div className="hero-section" id="hero">
      

      <div className="hero-text">
        <div className="hero-welcome">WELCOME</div>
        <h1 className="hero-heading">A celebration of flavor</h1>
        <p className="hero-description">
          We are more than just a breakfast and brunch restaurant! We are a celebration of flavor,
          culture, and connection. Rooted in creativity and led by the culinary vision of Chef Emani Roberts,
          we blend elevated comfort food with modern elegance, bringing bold, soulful dishes to the heart of Chicago.
        </p>
      </div>

      <div className="hero-image-container">
        <img src={"/images/IMG_8137.jpg"} alt="Breakfast Dish" className="hero-image" loading="lazy"/>
      </div>
    </div>
  );
};

export default HeroSection;
