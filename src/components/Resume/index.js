import React from 'react';
import portfolio from '../../assets/images/Campanelli_resume.jpg';

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container-fluid my-bio">
        <div className="row">
          <div className="col-12 col-lg-5 text-center">
            <img src={portfolio} alt="Zachary Campanelli" className="img-fluid aniview-v4" />
          </div>
          <div className="col-12 col-lg-6 ">
            <h3 className="section_title">Resume</h3>
            <p>View my resume here or download it below:</p>
            <br />

            <p>
              <a href={portfolio} download="CampanelliResume">
                Download my resume here
              </a>
            </p>

            <h3 className="mt-5">Proficiencies and Skills</h3>
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-md-5 proficiencies">
                <h4>Hard Skills:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>APIs (Web, Server-side, Third-party)</li>
                  <li>Git & GitHub</li>
                  <li>Bootstrap</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>SQL</li>
                  <li>NoSQL</li>
                  <li>React</li>
                </ul>
                <h4>Software</h4>
                <ul>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Indesign</li>
                </ul>
              </div>

              <div className="col-12 col-md-5 proficiencies">
                <h4>Soft Skills</h4>
                <ul>
                  <li>Works well in teams or alone</li>
                  <li>Always willing to learn</li>
                  <li>Excellent time management</li>
                  <li>Enthusiastic</li>
                  <li>Persistent and devoted to assignments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
