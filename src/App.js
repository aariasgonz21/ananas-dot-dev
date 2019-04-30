import React from 'react';
import './App.scss';
import TitleScreen from './SectionComponents/TitleScreen'
import About from './SectionComponents/About'

function App() {
  return (
    <div className="App">
      <TitleScreen />
      <About />
    </div>
  );
}

export default App;