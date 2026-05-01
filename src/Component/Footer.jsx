import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2 className="logo">
            <img src="/Images/nav.png" alt="Digital Solutions" />
          </h2>
          <p>
            Digital Solution Services, renowned Digital Marketing Solutions,
            Business Strategy and Creative Studio.
          </p>
        </div>

        <div className="footer-box">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>Services</li>
            <li>About</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>CONTACT INFO</h3>
          <p><i className="bi bi-geo-alt"></i> Cypress Street</p>
          <p><i className="bi bi-telephone"></i>91+ 986300000</p>
          <p><i className="bi bi-envelope"></i> email@digitalsolution.com</p>
        </div>

        <div className="footer-box">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>

      </div>
    </footer>
  );
}