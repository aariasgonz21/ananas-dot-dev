import React from 'react';
import '../stylesheets/about.scss'
import aboutimg from '../images/about.svg'

function About() {
  return (
      <div id="about">
        <h2 className="about-title">Ana is...</h2>
          <img src={aboutimg} className="about-img" alt='ana'/>
          <ul className="about-list">
            <li className="about-li-item">A New York native with Dominican Roots</li>
            <li className="about-li-item">A frontend engineer with an eye for design & an entrepreneurial spirit</li>
            <li className="about-li-item">On the constant pursuit  of intersectional equality </li>
            <li className="about-li-item">A lover of animation & all things nerdy</li>
          </ul>
      </div>
    );
}

export default About;
