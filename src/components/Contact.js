import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS configuration - UPDATE THESE WITH YOUR EMAILJS VALUES
    const serviceId = 'service_k8iqrme'; // Replace with your EmailJS Service ID
    const templateId = 'template_7o54txb'; // Replace with your EmailJS Template ID  
    const publicKey = 'VcuEOVl2hN6wo6lb5'; // Replace with your EmailJS Public Key
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.message,
      to_email: 'gemindtechnologies2025@gmail.com', // Your email
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Thank you for your message! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to start your project? Let's discuss how we can help!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Build Something Amazing Together</h3>
            <p>
              Whether you have a specific project in mind or just want to explore possibilities, 
              we're here to help. Our team is ready to discuss your ideas and provide expert 
              guidance on bringing your vision to life.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>gemindtechnologies2025@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91-9914797182</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Remote & On-site Services Available</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <p className="social-message">We'll be on social media soon! For now, reach us via email or phone.</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select Project Type</option>
                  <option value="website">Business Website</option>
                  <option value="mobileapp">Mobile Application</option>
                  <option value="webapp">Web Application & Enterprise Solutions</option>
                  <option value="clouddev">Cloud Development & DevOps</option>
                  <option value="ecommerce">E-commerce Site</option>
                  <option value="maintenance">Website Maintenance & Support</option>
                  <option value="smallgigs">Small Tech Gigs & Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
