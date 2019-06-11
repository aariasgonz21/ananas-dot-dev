import React, { Component } from 'react';
import '../stylesheets/mission.scss'
import divider from '../images/divider.svg'

class Mission extends Component {

  render() {
    return (
      <div id="mission">
        <div className="container">
          <h2 className="mission-title"> My Mission </h2>
          <img className="divider" src={divider} alt="divider"/>
          <h3 className="mission-text"> My goal is to one day inspire youth, promote diversity, and bring more people that look like me into tech. </h3>
        </div>
      </div>
    );
  }

}

export default Mission;
