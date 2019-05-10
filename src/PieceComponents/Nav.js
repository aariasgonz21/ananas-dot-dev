import React, { Component } from 'react';
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
         <h2 onClick={this.clickHandler}>nav</h2>
      </div>
    );
  }

}

export default Nav;
