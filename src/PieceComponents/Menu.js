import React, { Component }  from 'react';
import About from '../SectionComponents/About'
import Mission from '../SectionComponents/Mission'
import Projects from '../SectionComponents/Projects'
import Music from '../SectionComponents/Music'
import Contact from '../SectionComponents/Contact'
import Home from '../SectionComponents/Home'

class Menu extends Component {
  render(){
    return (
      <div className="menu">
        <ul>
          <li><a href="#about">about</a></li>
          <li><a href="#mission">mission</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#music">the jams</a></li>
          <li><a href="#contact">contact</a></li>
          <li><a href="#home">back to the top</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
