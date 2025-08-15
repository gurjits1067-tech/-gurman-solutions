import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Gurjot Singh',
      role: 'Frontend Engineer & Co-Founder',
      description: 'Passionate about creating beautiful, user-friendly interfaces and leading frontend development initiatives.',
      skills: ['React', 'JavaScript', 'CSS3', 'UI/UX Design'],
      avatar: '👨‍💻'
    },
    {
      id: 2,
      name: 'Sister Name',
      role: 'Frontend Engineer & Co-Founder',
      description: 'Expert in modern web technologies and creating responsive, accessible user experiences.',
      skills: ['React', 'TypeScript', 'Next.js', 'Responsive Design'],
      avatar: '👩‍💻'
    },
    {
      id: 3,
      name: 'Backend Engineer 1',
      role: 'Backend Engineer',
      description: 'Specialized in building robust, scalable backend systems and API development.',
      skills: ['Node.js', 'Python', 'Database Design', 'API Development'],
      avatar: '👨‍💻'
    },
    {
      id: 4,
      name: 'Backend Engineer 2',
      role: 'Backend Engineer',
      description: 'Focused on server architecture, database optimization, and system performance.',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'DevOps'],
      avatar: '👨‍💻'
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>The talented developers behind Gurman Solutions</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">{member.avatar}</div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                <div className="member-skills">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-cta">
          <h3>Join Our Team</h3>
          <p>We're always looking for talented developers who share our passion for creating amazing digital experiences.</p>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Team;
