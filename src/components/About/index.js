import React from 'react';
import selfImage from '../../../src/assets/images/Zacharycampanelli.jpg'

function About() {
    return ( 
        <section className='my-5'>
            <h1 id='about'>Zack</h1>
            <img src={selfImage} className='my-2' style={{ width: '100%'}} alt='self-image' />
        </section>
    )
}

export default About;