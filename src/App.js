import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faCogs, 
  faPencilRuler, 
  faTabletAlt, 
  faIndustry, 
  faDatabase 
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <h1>Markevis Lima</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="container">
          <h1>Markevis Lima</h1>
          <h2>Mechatronics & Software Engineer</h2>
          <div className="contact-info">
            <a href="mailto:limamarkevis93@gmail.com">limamarkevis93@gmail.com</a>
            <a href="tel:8643372249">(864) 337-2249</a>
            <a href="https://github.com/MarkLima93" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Experienced in both Mechatronics Engineering and Software Engineering, bringing a unique blend of hardware 
            and software expertise to problem-solving and system development. Skilled in mechanical systems, electronics, 
            and automation, combined with strong proficiency in software development, full-stack web technologies, and 
            database management.
          </p>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <h2>What I Do</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3>Software Development</h3>
              <p>Expert in front-end and back-end development, creating robust and scalable solutions using modern technologies.</p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faCogs} />
              </div>
              <h3>Mechatronics Engineering</h3>
              <p>Specialized in integrating mechanical, electrical, and software systems for automated solutions.</p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faPencilRuler} />
              </div>
              <h3>UI / UX Design</h3>
              <p>Craft custom web experiences that deliver a message to target audiences with intuitive interfaces.</p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faTabletAlt} />
              </div>
              <h3>Responsive Design</h3>
              <p>Create user-friendly experiences for Android, iOS, and tablets, ensuring perfect functionality across all devices.</p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faIndustry} />
              </div>
              <h3>Robotics & Automation</h3>
              <p>Design and implement automated systems using PLC programming, sensors, and control systems.</p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <h3>Data-Driven Solutions</h3>
              <p>Implement analytics, optimization, and data-driven strategies for improved performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2>Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category mechatronics">
              <h3>Mechatronics Engineering</h3>
              <ul>
                <li>Control Systems & Automation</li>
                <li>Embedded Systems</li>
                <li>Sensors & Actuators</li>
                <li>Robotics</li>
                <li>Electrical & Electronics</li>
                <li>Mechanical Design</li>
                <li>Industrial Networking</li>
                <li>Manufacturing Processes</li>
              </ul>
            </div>
            <div className="skill-category software">
              <h3>Software Engineering</h3>
              <ul>
                <li>Programming Languages: JavaScript, Python, C#, C++, TypeScript</li>
                <li>Web Development: React, Angular, Vue.js, HTML, CSS</li>
                <li>Back-End: Node.js, .NET Core, Express, GraphQL</li>
                <li>Databases: MySQL, PostgreSQL, MongoDB</li>
                <li>DevOps & Cloud: AWS, Azure, Docker, CI/CD</li>
                <li>Testing: Unit Testing, Selenium, Katalon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2>Professional Experience</h2>
          <div className="experience-item">
            <h3>Junior Software Engineer</h3>
            <p className="date">2024 - Current</p>
            <ul>
              <li>Created solutions using C#, SQL, .Net 6.0, Node.js, Angular, and React</li>
              <li>Built reusable UI components with React, MUI, Redux, and TypeScript</li>
              <li>Developed RESTful APIs using C# and Node.js hosted on Azure and AWS</li>
              <li>Implemented unit tests using xUnit and Jest</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Packaging Technician</h3>
            <p className="date">2021 - 2024</p>
            <ul>
              <li>Operated and maintained packaging machinery</li>
              <li>Performed quality control and compliance checks</li>
              <li>Conducted machine maintenance and troubleshooting</li>
              <li>Managed inventory and material handling</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Associate of Applied Science Degree in Mechatronics Engineering Technology</h3>
            <p className="school">Guilford Technical Community College (GTCC), Greensboro, NC</p>
            <p className="date">2023</p>
            <p className="gpa">GPA: 3.5 / 4.0</p>
          </div>
          
          <div className="education-item">
            <h3>Certificate in Electrical Systems Technology</h3>
            <p className="school">Guilford Technical Community College (GTCC), Greensboro, NC</p>
            <p className="date">2022</p>
          </div>
          
          <div className="education-item">
            <h3>Certificate in Mechatronics Engineering Technology</h3>
            <p className="school">Guilford Technical Community College (GTCC), Greensboro, NC</p>
            <p className="date">2022</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Balance Center</h3>
            <p className="project-description">
              Designed and developed a modern, user-friendly Balance Center website leveraging Cursor to enhance 
              interactivity and user experience. Implemented a clean and accessible UI/UX with a focus on ease 
              of navigation and responsiveness across all devices.
            </p>
            
            <div className="tech-stack">
              <h4>Tech Stack</h4>
              <ul>
                <li>JavaScript (React/Vue)</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>Cursor</li>
              </ul>
            </div>

            <div className="project-features">
              <h4>Key Features</h4>
              <ul>
                <li>Interactive elements powered by Cursor for seamless user engagement</li>
                <li>Dynamic content rendering for real-time updates</li>
                <li>Responsive layout ensuring accessibility on desktop, tablet, and mobile</li>
                <li>SEO optimization for better visibility and faster loading speeds</li>
                <li>Integrated appointment booking system and informational resources</li>
              </ul>
            </div>

            <div className="project-links">
              <a href="https://github.com/MarkLima93" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2024 Markevis Lima. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
