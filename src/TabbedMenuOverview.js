import React, { useState } from 'react';
import './TabbedMenuOverview.css';
import img2 from'./images/AvocadoCroast.jpg'
import img7 from './images/KaleCaesarSalad.jpg'
import img13 from './images/brisketgrilledcheese.jpeg'
import img14 from './images/creoleShrimp&grits.jpg'
import img16 from './images/chicken&waffles.jpg'
import img21 from './images/biscuit.jpg'

const TabbedMenuOverview = () => {

    const menuItems = [
        { id: 1, name: 'Crab Brûlée Dip', description: 'Lump crab meat mixed with 5 cheese blends. Served with Garlic parmesan baguette', price: '$14', image: img2, category: 'Quick Fix', dishType: 'Brulee Special' },
        { id: 2, name: 'Avocado Croast', description: 'Toast croissant, calabrian chili, shaved red onion, sun-dried tomato, everything bagel seasoning, arugula, grated parmesan.', price: '$10', image: img2, category: 'Quick Fix', dishType: 'VG' },
        { id: 3, name: 'Açaí Bowl', description: 'Honey walnut granola, bananas, strawberries, blueberries, toasted coconut flakes, wildflower honey', price: '$9', image: null, category: 'Quick Fix', dishType: 'VG' },
        { id: 4, name: 'Banana Split Greek Yogurt Parfait', description: 'Plain Greek yogurt, mixed berries, brûlée bananas, honey walnut granola, wildflower honey', price: '$8', image: null, category: 'Quick Fix', dishType: 'VG' },
        { id: 5, name: 'Crispy Brussels Sprouts', description: 'Flash-fried Brussels sprouts, lemon crema, wildflower honey', price: '$7', image: null, category: 'Quick Fix', dishType: 'VG' },
        { id: 6, name: 'Chef’s Seasonal Fruit Plate', description: 'A curated selection of the freshest seasonal fruits', price: '$9', image: null, category: 'Quick Fix', dishType: 'VG' },
        { id: 7, name: 'Kale Caesar Salad', description: 'Shaved Parmesan, house-made brioche croutons, lime, creamy caesar dressing.', price: '$11', image: img7, category: 'Soups & Salads', dishType: 'VG' },
        { id: 8, name: 'Seafood & Chicken Gumbo', description: 'Shrimp, crab, chicken sausage, Cajun spices, jasmine rice (Seasonal)', price: '$13', image: null, category: 'Soups & Salads', dishType: 'NV' },
        { id: 9, name: 'Strawberry & Apple Salad', description: 'Mixed greens, arugula, blue cheese, gala apples, strawberries, pickled red onion, cucumber, cherry tomatoes, candied walnuts, dried cranberries, strawberry balsamic vinaigrette', price: '$12', image: null, category: 'Soups & Salads', dishType: 'VG' },
        { id: 13, name: 'Everything Vegan Burger', description: 'Toasted potato bun, garlic aioli, butter lettuce, tomato, avocado spread, caramelized onion, provolone cheese', price: '$12', image: img13, category: 'Handhelds', dishType: 'V' },
        { id: 10, name: 'Avocado Turkey Club', description: 'Ciabatta, oven-roasted turkey, thick-cut bacon, Swiss cheese, arugula, sun-dried tomato, avocado, chipotle aioli, mustard, B&B pickles', price: '$14', image: null, category: 'Handhelds', dishType: 'NV' },
        { id: 11, name: 'House Burger', description: 'Chipotle aioli, cheddar, butter lettuce, heirloom tomato, red onion marmalade, B&B pickles.', price: '$13', image: null, category: 'Handhelds', dishType: 'V' },
        { id: 12, name: 'Brisket Grilled Cheese', description: 'Smoked brisket, toasted sourdough, cheddar, garlic aioli', price: '$13', image: null, category: 'Handhelds', dishType: 'V' },
        { id: 14, name: 'Crème Brûlée French Toast', description: 'Vanilla bean soaked brioche, brûléed sugar crust, mixed berries (Half order available)', price: '$13', image: img14, category: 'Main Entrées', dishType: 'Brulee Special' },
        { id: 15, name: 'Lobster Sweet Potato Waffle', description: 'Cajun fried lobster tails, salted caramel praline sauce, vanilla cream', price: '$18', image: null, category: 'Main Entrées', dishType: 'NV' },
        { id: 16, name: 'Chicken & Waffles', description: 'Belgian waffle, 3 fried chicken wings, vanilla cream', price: '$14', image: img16, category: 'Main Entrées', dishType: 'NV' },
        { id: 17, name: 'Creole Shrimp & Grits', description: 'Smoked gouda grits, creole sauce, chicken sausage, cherry tomatoes, green onions', price: '$16', image: null, category: 'Main Entrées', dishType: 'GF' },
        { id: 18, name: 'Fried Catfish & Grits', description: 'Catfish fillet, smoked gouda grits, cajun crawfish cream sauce', price: '$15', image: null, category: 'Main Entrées', dishType: 'GF' },
        { id: 19, name: 'Old Fashioned Pancakes', description: 'Powdered sugar, whipped honey butter', price: '$10', image: null, category: 'Main Entrées', dishType: 'VG' },
        { id: 20, name: 'The Virgil Special', description: 'Choice of 3 chicken wings or fried catfish. Hot honey sauce, candied yams, braised collard greens.', price: '$17', image: null, category: 'Main Entrées', dishType: 'NV' },
        { id: 21, name: '5 Cheese Mac & Cheese', description: '', price: '$6', image: img21, category: 'Sides', dishType: 'V' },
        { id: 22, name: 'Braised Turkey Collard Greens', description: '', price: '$6', image: null, category: 'Sides', dishType: 'NV' },
        { id: 23, name: 'Candied Yams', description: '', price: '$6', image: null, category: 'Sides', dishType: 'V' },
        { id: 24, name: 'Breakfast Potatoes', description: '', price: '$5', image: null, category: 'Sides', dishType: 'V' },
        { id: 25, name: 'French Fries', description: '', price: '$5', image: null, category: 'Sides', dishType: 'V' },
        { id: 26, name: 'Sweet Potato Fries', description: '', price: '$5', image: null, category: 'Sides', dishType: 'V' },
        { id: 27, name: 'Chicken Sausage', description: '', price: '$5', image: null, category: 'Sides', dishType: 'NV' },
        { id: 28, name: 'Applewood Smoked Bacon', description: '', price: '$5', image: null, category: 'Sides', dishType: 'NV' },
        { id: 29, name: 'Veggie Sausage', description: '', price: '$5', image: null, category: 'Sides', dishType: 'V' },
        { id: 30, name: 'Smoked Gouda Grits', description: '', price: '$5', image: null, category: 'Sides', dishType: 'V' },
        { id: 31, name: 'Honey Butter Biscuit', description: '', price: '$4', image: null, category: 'Sides', dishType: 'V' }
      ];
      
  const categories = [...new Set(menuItems.map(item => item.category))];
  const [activeTab, setActiveTab] = useState(categories[0]);
  const filteredItems = menuItems.filter(item => item.category === activeTab);
  const representativeImage = filteredItems[0]?.image || '';

  const renderTags = (dishType) => {
    if (!dishType) return null;

    return dishType.split(',').map((tag, idx) => {
      const trimmed = tag.trim().toUpperCase();
      if (trimmed !== 'GF' && trimmed !== 'VG') return null;

      const bgColor = trimmed === 'GF' ? '#6a4e2a' : '#2e7d32';

      return (
        <span
          key={idx}
          style={{
            backgroundColor: bgColor,
            color: 'white',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '0.7rem',
            fontWeight: '600',
            marginRight: '6px',
            marginTop: '4px',
            display: 'inline-block'
          }}
        >
          {trimmed}
        </span>
      );
    });
  };

  return (
    <div className="tabbed-menu-overview" id="menu-section">
      <h2 className="overview-heading">Menu </h2>
      <div className="overview-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`overview-tab ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {representativeImage && (
        <div className="overview-image-wrapper">
          <img src={representativeImage} alt={activeTab} className="overview-image" loading="lazy" />
        </div>
      )}

      <div className="overview-items">
        {filteredItems.map(item => (
          <div key={item.id} className="overview-text">
            <h3>{item.name} <span className="overview-price">{item.price}</span></h3>
            <p>{item.description}</p>
            <div className="tag-row">
              {renderTags(item.dishType)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedMenuOverview;
