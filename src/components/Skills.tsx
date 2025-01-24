import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="container  has-background-black-bis">
        <h2 className="title has-text-centered has-text-white-light">Skills</h2>

        <div className="columns is-multiline is-centered ">
          {/* Programming Languages */}
          <div className="column is-3">
            <div className="box has-text-centered has-background-grey-lighter">
              <h3 className="subtitle is-5">Programming Languages</h3>
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>

          {/* Web Development */}
          <div className="column is-3">
            <div className="box has-text-centered has-background-grey-lighter">
              <h3 className="subtitle is-5">Web Development</h3>
              <ul>
                <li>React</li>
                <li>Vue.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Spring Boot</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>


    

          {/* Testing & Automation */}
          <div className="column is-3">
            <div className="box has-text-centered has-background-grey-lighter">
              <h3 className="subtitle is-5">Testing & Automation</h3>
              <ul>
                <li>Selenium</li>
                <li>Cucumber BDD</li>
                <li>JUnit</li>
                <li>TestNG</li>
                <li>Apache POI</li>
              </ul>
            </div>
          </div>
                    {/* Databases */}
                    <div className="column is-3">
            <div className="box has-text-centered has-background-grey-lighter">
              <h3 className="subtitle is-5">Databases</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQL</li>
                <li>PL/SQL</li>
              </ul>
            </div>
          </div>

        
              {/* Tools & Technologies */}
              <div className="column is-3">
            <div className="box has-text-centered has-background-grey-lighter">
              <h3 className="subtitle is-5">Tools & Technologies</h3>
              <ul>
                <li>Git</li>
                <li>JUnit</li>
                <li>Selenium</li>
                <li>Cucumber</li>
                <li>Postman</li>
                <li>Agile</li>
                <li>IntelliJ</li>
              </ul>
            </div>
          </div>
          <div className="column is-one-third">
          <div className="box has-text-centered has-background-grey-lighter">
            <h3 className="subtitle">Interpersonal Skills</h3>
            <ul>
             
              <li>Problem-Solving</li>
              <li>Team Collaboration</li>
              <li>Adaptability</li>
              <li>Leadership</li>
              <li>Conflict Resolution</li>
              <li>Time Management</li>
              <li>Attention to Detail</li>
            </ul>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
