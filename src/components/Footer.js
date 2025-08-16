import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GeMind TECHNOLOGIES</h3>
            <p>
              Empowering businesses with innovative web solutions. 
              We create digital experiences that drive growth and success.
            </p>
            <div className="footer-social">
              <p className="social-coming-soon">Social media profiles coming soon!</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Custom Website Development</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">Web Applications & Enterprise Solutions</a></li>
              <li><a href="#services">Cloud Development & DevOps</a></li>
              <li><a href="#services">Website Maintenance & Support</a></li>
              <li><a href="#services">E-commerce Solutions</a></li>
              <li><a href="#services">Small Tech Gigs & Consulting</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 gemindtechnologies2025@gmail.com</p>
              <p>📱 +91-9914797182</p>
              <p>📍 Remote & On-site Services</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 GeMind TECHNOLOGIES. All rights reserved.</p>
            <div className="footer-bottom-links">
              <span className="coming-soon">Legal pages coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
