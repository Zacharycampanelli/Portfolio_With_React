import React from 'react';
import portfolio from '../../assets/images/Campanelli_resume.jpg';


function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container-fluid my-bio">
        <div className="row">
          <div className="col-12 col-lg-6 text-center">
            <img
              src={portfolio}
              alt="Zachary Campanelli"
              className="img-fluid aniview-v4"
              //   data-av-animation="animate__fadeInLeft"
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="section_title">Resume</h3>
            <p>View here or download below:</p>
            <br />
           
            <p>
              <a href="../../assets/images/Campanelli_resume.jpg" download="CampanelliResume">
                {' '}
                Download my resume here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
