import React from 'react';
import './App.scss';
import Home from './SectionComponents/Home'
import About from './SectionComponents/About'
import Mission from './SectionComponents/Mission'
import Projects from './SectionComponents/Projects'
import Music from './SectionComponents/Music'
import Contact from './SectionComponents/Contact'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Mission />
      <Projects />
      <Music />
      <Contact />
    </div>
  );
}

export default App;
