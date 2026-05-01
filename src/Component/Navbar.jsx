import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a
          href="#home"
          className="navbar-brand logo"
          onClick={(e) => handleScroll(e, "home")}
        >
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
              <a
                href="#home"
                className="nav-link"
                onClick={(e) => handleScroll(e, "home")}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#services"
                className="nav-link"
                onClick={(e) => handleScroll(e, "services")}
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#products"
                className="nav-link"
                onClick={(e) => handleScroll(e, "products")}
              >
                Products
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#faqs"
                className="nav-link"
                onClick={(e) => handleScroll(e, "faqs")}
              >
                FAQs
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#blogs"
                className="nav-link"
                onClick={(e) => handleScroll(e, "blogs")}
              >
                Blog
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={(e) => handleScroll(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          
          <a
            href="#contact"
            className="btn cta-btn"
            onClick={(e) => handleScroll(e, "contact")}
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </nav>
  );
}