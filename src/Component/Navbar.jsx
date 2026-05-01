import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#home" onClick={closeMenu}>
          <img src="/Images/nav.png" alt="header-logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="mainNavbar"
        >
          <ul className="navbar-nav nav-links mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products" onClick={closeMenu}>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faqs" onClick={closeMenu}>
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blogs" onClick={closeMenu}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <a className="btn cta-btn" href="" onClick={closeMenu}>
            GET A QUOTE
          </a>
        </div>
      </div>
    </nav>
  );
}