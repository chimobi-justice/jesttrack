import React, { Component } from "react";
import '../styles/about.scss';
import about from '../images/about.jpg';

class About extends Component {
  render() {
    return (
      <div className="aboutWrapper" id="about">
        <div className="about-image">
          <img src={about} alt="" />
        </div>
        <div className="about-content">
          <h2>About Jesttract</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident ea, eaque et officia sed quos id
            facilis? Cumque aspernatur incidunt explicabo earum
            deleniti, inventore, quo, reprehenderit ullam qui
            necessitatibus eaque.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident ea, eaque et officia sed quos id
            facilis? Cumque aspernatur incidunt explicabo earum
            deleniti, inventore, quo, reprehenderit ullam qui
            necessitatibus eaque.
          </p>
        </div>
      </div>
    );
  }
}

export default About;