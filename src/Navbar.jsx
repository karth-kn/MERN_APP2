import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">My Website</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gridview">Grid View</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
