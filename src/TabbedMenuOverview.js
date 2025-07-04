import React, { useState,useEffect } from 'react';
import './TabbedMenuOverview.css';

const TabbedMenuOverview = () => {

  const [menuItems, setMenuItems] = useState([]);
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    fetch('/menuItems.json')
      .then(res => res.json())
      .then(data => setMenuItems(data));
  }, []);
  
  useEffect(() => {
    if (menuItems.length > 0 && !activeTab) {
      const categories = [...new Set(menuItems.map(item => item.category))];
      setActiveTab(categories[0]);
    }
  }, [menuItems, activeTab]);
  

  const categories = [...new Set(menuItems.map(item => item.category))];
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
