import React, { Component } from "react";
import '../styles/service.scss';
import support from '../images/support.png';
import customerService from '../images/customer-service.png';
import location from '../images/location.png';
import hour from '../images/24-hours.png';
import imb from '../images/ibm.png';
import google from '../images/google.png';
import handshake from '../images/handshake.png';
import investor from '../images/investor.png';


class Service extends Component {
  render() {
    return (
      <>
        <div className="service-top" id="service">
          <div className="service-content">
            <h2>service</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Harum, nostrum nisi aliquam delectus quaerat
              dolore molestias illo consectetur nesciunt provident
            </p>
          </div>

          <div id="serviceInfo">
            <div>
              <img src={customerService} alt="customer service" />
              <h4>Lorem, ipsum dolor.</h4>
            </div>
            <div>
              <img src={support} alt="support" />
              <h4>Lorem, ipsum dolor.</h4>
            </div>
            <div>
              <img src={location} alt="location" />
              <h4>Lorem, ipsum dolor.</h4>
            </div>
            <div>
              <img src={hour} alt="hour" />
              <h4>Lorem, ipsum dolor.</h4>
            </div>
          </div>
        </div>

        <div className="service-bottom">
          <div className="service-content">
            <h2>Lorem ipsum</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Harum, nostrum nisi aliquam delectus quaerat
              dolore molestias illo consectetur nesciunt provident
            </p>

          </div>

          <div id="serviceInfo">
            <div>
              <img src={imb} alt="ibm logo" />
              <h4>Lorem, ipsum dolor.</h4>
            </div>
            <div>
              <img src={google} alt="google logo" />
              <h4>Lorem, ipsum dolor.</h4>
            </div>
            <div>
              <img src={handshake} alt="handshake" />
              <h4>Lorem, ipsum dolor.</h4>
            </div>
            <div>
              <img src={investor} alt="investor" />
              <h4>Lorem, ipsum dolor.</h4>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Service;