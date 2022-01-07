import React, { useState } from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import Aboutme from './components/Aboutme/Aboutme';
import Projects from './components/Projects/Projects';
import Contactme from './components/Contactme/Contactme';
import Foo from './components/Footer/Footer';
import Resume from './components/Resume/resume';
import './index.css';


function App() {

  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <Aboutme />;
      case 'Contact':
        return <Contactme />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      default:
        return <Aboutme />;
    }
  };

  return (
    <div className="App">
   <MenuBar currentPage={currentPage} handlePageChange={handlePageChange}/>
   <main>
        {renderPage()}
      </main>
    <Foo/>
  </div>
);
}

export default App;
