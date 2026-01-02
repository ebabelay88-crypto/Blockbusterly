import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import user from '../../assets/user.jpg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h2 className="logo">BigBlockbusters</h2>

        {/* NAV LINKS */}
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Upcoming</a></li>
        </ul>

        {/* ICONS */}
        <div className="nav-icons">
          <img className="user-icon" src={user} />
          <div className="log-in">
              <h2>login</h2>
          </div>
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
