import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function Notification(status) {
  console.log(status, 'hi');
  return (
    <div>
      {(() => {
        switch (status) {
          case 'About Me':
            return <About></About>;
          case 'My Work':
            return <PhotoGallery></PhotoGallery>;
          case 'Contact Me':
            return <ContactForm></ContactForm>;
          case 'Resume':
            return <Resume></Resume>;
          default:
            return <About></About>;
        }
      })()}
    </div>
  );
}

function App() {
  const [sectionTitles] = useState([
    {
      title: 'About Me',
      ref: 'about_me',
    },
    {
      title: 'My Work',
      ref: 'my_work',
    },
    {
      title: 'Contact Me',
      ref: 'contact_me',
    },
    {
      title: 'Resume',
      ref: 'resume',
    },
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

        {console.log(currentCategory.title)}
        {Notification(currentCategory.title)}

        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
