import React, { useState } from 'react';
import About from './components/About'
import Nav from './components/Nav'
import './App.css'
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGallery';
import ContactForm from './components/Contact';

function App() {

  const [sectionTitles] = useState([
    {
      title: 'About Me',
      ref: 'about_me'
    },
    {
      title: 'My Work',
      ref: 'my_work'
    },
    {
      title: 'Contact Me',
      ref: 'contact_me'
    },
    {
      title: 'Resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(sectionTitles[0]);

  return (
    <div>
      <main>
        <Nav
        sectionTitles={sectionTitles}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Nav>
        <PhotoGallery></PhotoGallery>
        
        <About></About>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App;
