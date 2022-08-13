import React, { Component } from "react";
import '../styles/heroSection.scss';
import hero1 from '../images/hero1.svg';
import hero2 from '../images/hero2.svg';
import hero3 from '../images/hero3.svg';
import hero4 from '../images/hero4.svg';

import { Button, Carousel } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";


class HeroSection extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div className="heroWrapper">
          <div className="heroHolder">
            <div className="heroContent">
              <h2>Start your career with us
              </h2>
              <p>Be Part Of The Largest Transaction Network In Nigeria</p>
              <Button type="default" className="heroContent-btn">Learn More <ArrowRightOutlined /></Button>
            </div>
            <div className="heroImage">
              <img src={hero1} alt="" />
            </div>
          </div>
        </div>
        <div className="heroWrapper">
          <div className="heroHolder">
            <div className="heroContent">
              <h2>Start your career with us
              </h2>
              <p>Be Part Of The Largest Transaction Network In Nigeria</p>
              <Button type="default" className="heroContent-btn">Learn More <ArrowRightOutlined /></Button>
            </div>
            <div className="heroImage">
              <img src={hero2} alt="" />
            </div>
          </div>
        </div>
        <div className="heroWrapper">
          <div className="heroHolder">
            <div className="heroContent">
              <h2>Start your career with us
              </h2>
              <p>Be Part Of The Largest Transaction Network In Nigeria</p>
              <Button type="default" className="heroContent-btn">Learn More <ArrowRightOutlined /></Button>
            </div>
            <div className="heroImage">
              <img src={hero3} alt="" />
            </div>
          </div>
        </div>
        <div className="heroWrapper">
          <div className="heroHolder">
            <div className="heroContent">
              <h2>Start your career with us
              </h2>
              <p>Be Part Of The Largest Transaction Network In Nigeria</p>
              <Button type="default" className="heroContent-btn">Learn More <ArrowRightOutlined /></Button>
            </div>
            <div className="heroImage">
              <img src={hero4} alt="" />
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default HeroSection;