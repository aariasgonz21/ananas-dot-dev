import React from 'react';
import '../stylesheets/home.scss'
import star from '../images/star.svg'
import Nav from '../PieceComponents/Nav'
import Menu from '../PieceComponents/Menu'

function Home() {
  return (
      <div className="home">
        <div className="name">
          <h1>Ana</h1>
          <h1>Arias-Gonzalez
            <img className="star" src={star} alt="star"/>
          </h1>
        </div>
        <div className="title">
          <h3>afro-latinx frontend engineer</h3>
        </div>
        <Nav />
      </div>
    );
}

export default Home;
