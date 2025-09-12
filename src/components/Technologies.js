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
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #61dafb, #21759b)', color: 'white', fontSize: '16px'}}>R</div>
                <span className="tech-name">ReactJS</span>
              </div>
              <div className="tech-item angular">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #dd0031, #c3002f)', color: 'white', fontSize: '16px'}}>A</div>
                <span className="tech-name">Angular</span>
              </div>
              <div className="tech-item javascript">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #f7df1e, #f0db4f)', color: '#323330', fontSize: '16px'}}>JS</div>
                <span className="tech-name">JavaScript</span>
              </div>
              <div className="tech-item html">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #e34f26, #f06529)', color: 'white', fontSize: '14px'}}>H5</div>
                <span className="tech-name">HTML5</span>
              </div>
              <div className="tech-item css">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #1572b6, #33a9dc)', color: 'white', fontSize: '16px'}}>C</div>
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
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #339933, #66bb6a)', color: 'white', fontSize: '14px'}}>N</div>
                <span className="tech-name">Node.js</span>
              </div>
              <div className="tech-item java">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #f89820, #ed8b00)', color: 'white', fontSize: '16px'}}>J</div>
                <span className="tech-name">Java</span>
              </div>
              <div className="tech-item spring">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #6db33f, #4caf50)', color: 'white', fontSize: '14px'}}>S</div>
                <span className="tech-name">Spring Boot</span>
              </div>
              <div className="tech-item php">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #777bb4, #8892bf)', color: 'white', fontSize: '14px'}}>P</div>
                <span className="tech-name">PHP</span>
              </div>
              <div className="tech-item react-native">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #61dafb, #21759b)', color: 'white', fontSize: '12px'}}>RN</div>
                <span className="tech-name">React Native</span>
              </div>
              <div className="tech-item cpp">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #00599c, #004482)', color: 'white', fontSize: '12px'}}>C++</div>
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
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #ff9900, #ff6600)', color: 'white', fontSize: '12px'}}>AWS</div>
                <span className="tech-name">AWS</span>
              </div>
              <div className="tech-item mongodb">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #47a248, #4caf50)', color: 'white', fontSize: '14px'}}>M</div>
                <span className="tech-name">MongoDB</span>
              </div>
              <div className="tech-item mysql">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #4479a1, #00758f)', color: 'white', fontSize: '14px'}}>My</div>
                <span className="tech-name">MySQL</span>
              </div>
              <div className="tech-item sql">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #336791, #235a81)', color: 'white', fontSize: '14px'}}>SQL</div>
                <span className="tech-name">SQL</span>
              </div>
              <div className="tech-item dynamodb">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #ff9900, #ff6600)', color: 'white', fontSize: '12px'}}>DB</div>
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
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #21759b, #0073aa)', color: 'white', fontSize: '14px'}}>WP</div>
                <span className="tech-name">WordPress</span>
              </div>
              <div className="tech-item devops">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #326ce5, #1e88e5)', color: 'white', fontSize: '12px'}}>DO</div>
                <span className="tech-name">DevOps</span>
              </div>
              <div className="tech-item api">
                <div className="tech-logo" style={{background: 'linear-gradient(45deg, #2563eb, #3b82f6)', color: 'white', fontSize: '12px'}}>API</div>
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
