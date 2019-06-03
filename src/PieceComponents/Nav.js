import React, { Component } from 'react';
import navbar from '../images/navbar.svg'
import Menu from './Menu'

class Nav extends Component {
    state = {
      clicked:true
    }
  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <div className="nav">
         {!this.state.clicked && <Menu />}
         <img src={navbar} className="top"
         onClick={this.clickHandler}
         alt="navbar"/>
      </div>
    );
  }
}
export default Nav;
