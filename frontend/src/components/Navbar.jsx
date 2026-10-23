
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Doctor", path: "/doctor-profile" },
    { name: "Services", path: "/services" },
    { name: "Facilities", path: "/facilities" },
    { name: "OPD Timing", path: "/timing" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="clinic-header">
      <div className="clinic-navbar">
        <Link to="/" className="clinic-brand" onClick={closeMenu}>
          <img
            src="/images/logo.jpeg"
            alt="Solace Clinic Logo"
            className="clinic-logo"
          />

          <span className="clinic-brand-text">
            <strong>Solace Clinic</strong>
            <small>ALTERNATIVE MEDICINE</small>
          </span>
        </Link>

        <button
          type="button"
          className="clinic-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="clinic-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="clinic-navigation"
          className={`clinic-navigation ${menuOpen ? "is-open" : ""}`}
        >
          <div className="clinic-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `clinic-nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/appointment"
            className="clinic-book-button"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
