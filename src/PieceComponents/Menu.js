import React, { Component }  from 'react';
import About from '../SectionComponents/About'
import Mission from '../SectionComponents/Mission'
import Projects from '../SectionComponents/Projects'
import Music from '../SectionComponents/Music'
import Contact from '../SectionComponents/Contact'
import Home from '../SectionComponents/Home'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

      // <Router>
      //   <Switch>
      //     <Route path="/about" component={About} />
      //     <Route path="/mission" component={Mission} />
      //     <Route path="/projects" component={Projects} />
      //     <Route path="/music" component={Music} />
      //     <Route path="/contact" component={Contact} />
      //   </Switch>
      //   <ul>
      //     <li><Link to="/about">about</Link></li>
      //     <li><Link to="/mission">mission</Link></li>
      //     <li><Link to="/projects">projects</Link></li>
      //     <li><Link to="/music">the jams</Link></li>
      //     <li><Link to="/contact">contact</Link></li>
      //   </ul>
      // </Router>
    );
  }
}

export default Menu;
