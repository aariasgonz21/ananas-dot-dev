import React from 'react';
import './App.scss';
import Home from './SectionComponents/Home'
import About from './SectionComponents/About'
import Mission from './SectionComponents/Mission'
import Projects from './SectionComponents/Projects'
import Music from './SectionComponents/Music'
import Contact from './SectionComponents/Contact'
import 'normalize.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Mission/>
      <Projects/>
      <Music/>
      <Contact/>
    </div>
  );
}

export default App;
