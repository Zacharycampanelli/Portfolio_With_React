import React, { useState } from 'react';
import About from './components/About'
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <About></About>
      </main>
    </div>
  )
}

export default App;
