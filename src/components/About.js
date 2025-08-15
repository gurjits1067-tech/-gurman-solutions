import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header about-header">
          <h2>
            <span className="company-name">GURMAN</span>
            <span className="company-type">SOLUTIONS</span>
          </h2>
          <p>Your trusted partner in digital transformation</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              Gurman Solutions is a dynamic web development company founded by passionate 
              developers who understand the power of a strong online presence. We specialize 
              in creating custom websites and web applications that not only look great but 
              also drive real business results.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              To empower businesses with cutting-edge digital solutions that enhance their 
              online presence, streamline operations, and drive growth in an increasingly 
              digital marketplace.
            </p>
            
            <h3>Why Choose Us</h3>
            <p>
              As a new company, we bring fresh perspectives and modern development practices 
              to every project. Our team is passionate about technology and committed to 
              delivering exceptional results that exceed expectations.
            </p>
            
            <h3>Flexible Engagement Models</h3>
            <p>
              We understand that businesses have different needs and budgets. Whether you need 
              a complete website overhaul, a small feature addition, or just some technical 
              consulting, we're here to help. We're particularly interested in taking on 
              small tech gigs and projects from other businesses to build lasting partnerships.
            </p>
            

            <div className="stats">
              <div className="stat">
                <h4>4</h4>
                <p>Expert Developers</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Client Focused</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Support Available</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="tech-icons">
                <span className="tech-icon">⚛️</span>
                <span className="tech-icon">🚀</span>
                <span className="tech-icon">💻</span>
                <span className="tech-icon">🔧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
