import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import AboutUs from './AboutUs';
import Content from './Content';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import TabbedMenuOverview from './TabbedMenuOverview';
import BruleePopup from './BruleePopup';
import HeroSection from './HeroSection';
import Display from './Display';
import Reservations from './Reservations';
import PricedMenu from './PricedMenu';

const HomePage = () => (
  <>
    <Content />
    <HeroSection />
    <Display></Display>
  </>
);

const MenuPage = () => (
  <>
    <TabbedMenuOverview />
  </>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' && <BruleePopup />}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/reserve' element={<Reservations/>} />
        <Route path='/fullMenu' element={<PricedMenu/>} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
