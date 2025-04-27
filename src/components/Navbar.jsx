import { useState, useEffect, useRef } from "react";
import { Menu, ShoppingCart, Search, Home } from "lucide-react";
import "../styles/Navbar.css";

import logo from "../assets/image/logo.png";
import lightModeImg from "../assets/image/dark-mode-button.png";
import darkModeImg from "../assets/image/light-mode-button.png";
import HomePage from "./Home"; // Import Home component

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for menu

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode ? darkModeImg : lightModeImg} alt="Theme Toggle" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <Home size={20} /> Home
          </li>
          <li>
            <ShoppingCart size={20} /> Best Seller
          </li>
          <li>
            <Search size={20} /> Quick Search
          </li>
        </ul>

        <ShoppingCart size={24} className="cart-icon" />

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={28} />
        </button>

        {/* Mobile Dropdown Menu */}
        <div ref={menuRef} className={`mobile-menu ${menuOpen ? "active" : ""} ${darkMode ? "dark" : ""}`}>
          <ul>
            <li onClick={() => setMenuOpen(false)}>
              <Home size={20} /> Home
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <ShoppingCart size={20} /> Best Seller
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Search size={20} /> Quick Search
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <ShoppingCart size={24} /> Cart
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Page Component */}
      <HomePage darkMode={darkMode} />
    </div>
  );
};

export default Navbar;
