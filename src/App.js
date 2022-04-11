import React, { useState } from 'react';
import About from './components/About'
import Nav from './components/Nav'
import './App.css'
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <PhotoGallery></PhotoGallery>
        <About></About>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App;
