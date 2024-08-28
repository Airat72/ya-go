import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo" onClick={handleLogoClick}>
        YA-GO
      </div>
      <button
        className="nav-toggle"
        id="nav-toggle"
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        className={`nav-links ${isOpen ? "show" : ""}`}
        htmlFor="nav-toggle"
      >
        <li className="nav-link">
          <a href="#about">Виды работ</a>
        </li>
        <li className="nav-link">
          <a href="#benefits">Наши плюсы</a>
        </li>
        <li className="nav-link">
          <a href="#contacts">Контакты</a>
        </li>
        <li className="nav-close">
          <button className="close-btn" onClick={handleToggle}>
            ×
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;