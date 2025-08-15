import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'E-commerce',
      description: 'A full-featured online store with payment processing, inventory management, and customer portal.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Business Dashboard',
      category: 'Web Application',
      description: 'Comprehensive business analytics dashboard with real-time data visualization and reporting.',
      image: '📊',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Restaurant Website',
      category: 'Business Website',
      description: 'Modern restaurant website with online ordering, menu management, and reservation system.',
      image: '🍽️',
      technologies: ['React', 'Firebase', 'CSS3', 'Responsive Design'],
      link: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'Personal Website',
      description: 'Creative portfolio website for a graphic designer with project showcase and contact forms.',
      image: '🎨',
      technologies: ['React', 'Framer Motion', 'Styled Components', 'Netlify'],
      link: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      category: 'Content Management',
      description: 'Feature-rich blog platform with user authentication, content management, and SEO optimization.',
      image: '📝',
      technologies: ['React', 'Next.js', 'Sanity CMS', 'Vercel'],
      link: '#'
    },
    {
      id: 6,
      title: 'Real Estate Portal',
      category: 'Property Website',
      description: 'Comprehensive real estate website with property listings, search filters, and agent profiles.',
      image: '🏠',
      technologies: ['React', 'Node.js', 'MySQL', 'Google Maps API'],
      link: '#'
    }
  ];

  const categories = ['All', 'E-commerce', 'Web Application', 'Business Website', 'Personal Website', 'Content Management', 'Property Website'];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>Showcasing our best work and successful projects</p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="project-icon">{project.image}</div>
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a href={project.link} className="portfolio-link">View Project</a>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p className="portfolio-category">{project.category}</p>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-cta">
          <h3>Want to See More?</h3>
          <p>We have many more projects to showcase. Let's discuss your project requirements!</p>
          <a href="#contact" className="btn btn-primary">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
