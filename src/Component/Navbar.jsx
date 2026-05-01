import React from "react";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
       <img src="/Images/nav.png" alt="header-logo" />
      </div>

      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li><a href="#blogs">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="cta-btn">GET A QUOTE</button>
    </nav>
    </>
  );
}