import React, { Component } from 'react';
import Carousel from '../PieceComponents/Carousel'
import '../stylesheets/projects.scss'

class Projects extends Component {

  render() {
    return (
      <div id="project">
        <h2 class="projects-header">Projects</h2>
        <h3 class="projects-subheader">Take a gander at these bad boys</h3>
        <Carousel/>
      </div>
    );
  }

}
export default Projects
;
