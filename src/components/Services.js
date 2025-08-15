import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Custom Website Development',
      description: 'Professional, responsive websites tailored to your business needs and brand identity.',
      features: ['Modern Design', 'Mobile-First', 'SEO Optimized', 'Fast Loading']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage your customers.',
      features: ['iOS & Android', 'Cross-Platform', 'User Experience', 'App Store Ready']
    },
    {
      icon: '⚡',
      title: 'Web Applications & Enterprise Solutions',
      description: 'Dynamic web applications and enterprise-grade solutions that streamline your business processes.',
      features: ['User Management', 'Database Integration', 'API Development', 'Microservices']
    },
    {
      icon: '☁️',
      title: 'Cloud Development & DevOps',
      description: 'Cloud-native applications and infrastructure setup for scalable business solutions.',
      features: ['AWS & Azure', 'Cloud Migration', 'CI/CD Pipelines', 'Monitoring & Scaling']
    },
    {
      icon: '🛠️',
      title: 'Website Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website secure, updated, and performing optimally.',
      features: ['Security Updates', 'Performance Monitoring', 'Content Updates', '24/7 Support']
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions that help you sell products and services online.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Customer Portal']
    },
    {
      icon: '🔧',
      title: 'Small Tech Gigs & Consulting',
      description: 'Quick fixes, small features, technical consulting, and maintenance work for businesses of all sizes.',
      features: ['Quick Fixes', 'Feature Additions', 'Technical Consulting', 'Code Reviews']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions for modern businesses</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to Get Started?</h3>
          <p>Let's discuss how we can help transform your business online</p>
          <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
