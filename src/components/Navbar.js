import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="navbar-logo">
        <img
          src="https://res.cloudinary.com/dkidc6jca/image/upload/v1738914238/bhsjofmzmnegujqz6kg9.png"
          alt="Recipe Book Logo"
        />
        <span>Recipe Book</span>
      </div>

      {/* Right Side: Home Button & Hamburger */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FiX size={28} color="white" />
        ) : (
          <FiMenu size={28} color="white" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
