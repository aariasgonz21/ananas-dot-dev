import React from 'react';
import '../stylesheets/home.scss'
import star from '../images/star.svg'

function TitleScreen() {
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
      </div>
    );
}

export default TitleScreen;
