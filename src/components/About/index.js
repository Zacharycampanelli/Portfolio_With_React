import React from 'react';
import selfImg from '../../assets/images/Zacharycampanelli.jpg';


function About() {
  return (
    <section id="about_me" className="bio">
      <div className="container-fluid my-bio">
        <div className="row">
          <div className="col-12 col-lg-6 text-center">
            <img
              src={selfImg}
              alt="Zachary Campanelli"
              className="img-fluid aniview-v4"
              //   data-av-animation="animate__fadeInLeft"
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="section_title">About Me</h3>
            <p>Full-Stack Developer, Graphic Designer, Life-Long Student and avid coffee drinker ☕</p>
            <br />
            <p>
              Front-end web developer currently learning the back-end side of development. Attended Central Connecticut
              State University with a Bachelor’s degree in Graphic Design and a minor in Computer Science, as well as
              earning a Certificate in Full-Stack web development through the University of Connecticut. Strong HTML,
              CSS, and JavaScript with newly acquired skills in responsive web design, Node.js, and APIs. Exceedingly
              strong work ethic and passionate about learning new things. My interests lie in mobile-first design and
              mobile app development. My dedication to my work and eagerness to learn new things make me an important
              asset on any team.
            </p>
            <br />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
