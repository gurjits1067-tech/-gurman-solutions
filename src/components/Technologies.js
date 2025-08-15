import React from 'react';
import './Technologies.css';

const Technologies = () => {
  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <div className="section-header">
          <h2>Our Technology Arsenal</h2>
          <p>Cutting-edge tools and technologies we master to deliver exceptional solutions</p>
        </div>
        
        <div className="tech-showcase">
          <div className="tech-category-card frontend-tech">
            <div className="tech-category-header">
              <div className="tech-category-icon">🎨</div>
              <h4>Frontend Technologies</h4>
            </div>
            <div className="tech-grid">
              <div className="tech-item react">
                <span className="tech-logo">⚛️</span>
                <span className="tech-name">ReactJS</span>
              </div>
              <div className="tech-item angular">
                <span className="tech-logo">🅰️</span>
                <span className="tech-name">Angular</span>
              </div>
              <div className="tech-item javascript">
                <span className="tech-logo">🟨</span>
                <span className="tech-name">JavaScript</span>
              </div>
              <div className="tech-item html">
                <span className="tech-logo">🌐</span>
                <span className="tech-name">HTML5</span>
              </div>
              <div className="tech-item css">
                <span className="tech-logo">🎨</span>
                <span className="tech-name">CSS3</span>
              </div>
            </div>
          </div>

          <div className="tech-category-card backend-tech">
            <div className="tech-category-header">
              <div className="tech-category-icon">⚙️</div>
              <h4>Backend & Mobile</h4>
            </div>
            <div className="tech-grid">
              <div className="tech-item nodejs">
                <span className="tech-logo">🟢</span>
                <span className="tech-name">Node.js</span>
              </div>
              <div className="tech-item java">
                <span className="tech-logo">☕</span>
                <span className="tech-name">Java</span>
              </div>
              <div className="tech-item spring">
                <span className="tech-logo">🍃</span>
                <span className="tech-name">Spring Boot</span>
              </div>
              <div className="tech-item php">
                <span className="tech-logo">🐘</span>
                <span className="tech-name">PHP</span>
              </div>
              <div className="tech-item react-native">
                <span className="tech-logo">📱</span>
                <span className="tech-name">React Native</span>
              </div>
              <div className="tech-item cpp">
                <span className="tech-logo">🔧</span>
                <span className="tech-name">C/C++</span>
              </div>
            </div>
          </div>

          <div className="tech-category-card database-tech">
            <div className="tech-category-header">
              <div className="tech-category-icon">🗄️</div>
              <h4>Database & Cloud</h4>
            </div>
            <div className="tech-grid">
              <div className="tech-item aws">
                <span className="tech-logo">☁️</span>
                <span className="tech-name">AWS</span>
              </div>
              <div className="tech-item mongodb">
                <span className="tech-logo">🍃</span>
                <span className="tech-name">MongoDB</span>
              </div>
              <div className="tech-item mysql">
                <span className="tech-logo">🐬</span>
                <span className="tech-name">MySQL</span>
              </div>
              <div className="tech-item sql">
                <span className="tech-logo">📊</span>
                <span className="tech-name">SQL</span>
              </div>
              <div className="tech-item dynamodb">
                <span className="tech-logo">⚡</span>
                <span className="tech-name">DynamoDB</span>
              </div>
            </div>
          </div>

          <div className="tech-category-card tools-tech">
            <div className="tech-category-header">
              <div className="tech-category-icon">🚀</div>
              <h4>Tools & Platforms</h4>
            </div>
            <div className="tech-grid">
              <div className="tech-item wordpress">
                <span className="tech-logo">📝</span>
                <span className="tech-name">WordPress</span>
              </div>
              <div className="tech-item devops">
                <span className="tech-logo">🔄</span>
                <span className="tech-name">DevOps</span>
              </div>
              <div className="tech-item api">
                <span className="tech-logo">🔌</span>
                <span className="tech-name">APIs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-stats">
          <div className="tech-stat-item">
            <span className="tech-stat-number">15+</span>
            <span className="tech-stat-label">Technologies</span>
          </div>
          <div className="tech-stat-item">
            <span className="tech-stat-number">5+</span>
            <span className="tech-stat-label">Years Experience</span>
          </div>
          <div className="tech-stat-item">
            <span className="tech-stat-number">100%</span>
            <span className="tech-stat-label">Up to Date</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
