import React, { Component }  from 'react';
import {useSpring, animated} from 'react-spring'
import About from '../SectionComponents/About'
import Mission from '../SectionComponents/Mission'
import Projects from '../SectionComponents/Projects'
import Music from '../SectionComponents/Music'
import Contact from '../SectionComponents/Contact'
import Home from '../SectionComponents/Home'
import { Link, animateScroll as scroll } from "react-scroll";

function Menu () {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (
      <animated.div style={props}>
      <div className="menu">
        <ul>
          <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration= {1000}>about</Link></li>
          <li><Link activeClass="active" to="mission" spy={true} smooth={true} offset={0} duration= {1000}>mission</Link></li>
          <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration= {1000}>projects</Link></li>
          <li><Link activeClass="active" to="music" spy={true} smooth={true} offset={0} duration= {1000}>the jams</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {1000}>contact</Link></li>
          <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration= {1000}>back to top</Link></li>
        </ul>
      </div>
      </animated.div>
    );
}

export default Menu;
