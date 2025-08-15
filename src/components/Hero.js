import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Digital Solutions That Drive Business Growth
          </h1>
          <p className="hero-subtitle">
            We are a team of passionate developers creating modern, responsive websites 
            and web applications that help businesses succeed in the digital world.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="code-block">
              <span className="code-line">&lt;div class="success"&gt;</span>
              <span className="code-line">  &lt;h1&gt;Your Business&lt;/h1&gt;</span>
              <span className="code-line">  &lt;p&gt;Online&lt;/p&gt;</span>
              <span className="code-line">&lt;/div&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
