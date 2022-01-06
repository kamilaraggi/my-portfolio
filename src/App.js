import React, { useState } from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import Aboutme from './components/Aboutme.js/Aboutme';
import Projects from './components/Projects/Projects';
import './index.css';


function App() {



  return (
    <div className="App">
   <MenuBar/>
    <Aboutme/>
    <Projects/>
  </div>
);
}

export default App;
