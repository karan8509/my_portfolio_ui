import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css"; // ✅ Normal CSS फ़ाइल इम्पोर्ट की

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* Karan Kashyap */}
        </div>
        <div className="nav-links">
          <NavLink to="/">Project</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
