import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/calculator-icon.png" alt="Calculator Icon" className="logo" />
        <h1 className="title">CalcMaster</h1>
      </div>
      <div className="header-right">
        <a href="#support" className="link">Support</a>
        <select className="theme-dropdown">
          <option>Theme: Light</option>
          <option>Theme: Dark</option>
        </select>
        <a href="#share" className="link">Share App</a>
        <button className="download-button">DOWNLOAD NOW</button>
      </div>
    </header>
  );
};

export default Header;