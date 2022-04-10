import React from 'react';
import selfImg from '../../assets/images/Zacharycampanelli.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Zack</h1>
      <img src={selfImg} className="my-2  d-flex" style={{ width: '100%' }} alt="developer" />
    </section>
  );
}

export default About;
