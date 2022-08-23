import React, { Component } from "react";
import '../../styles/footer.scss';

import {
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
  GoogleCircleFilled,
  MailFilled,
  PhoneFilled,
  EnvironmentFilled

} from "@ant-design/icons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-holder">
          <h1 className="footer-logo">
            Jesttract
          </h1>
          <div className="office-location">
            <div className="location">
              <h3><EnvironmentFilled /> Head Office</h3>
              <p>International finacial centre 2 lt 19</p>
              <p>Lt send close 20244</p>
            </div>
            <div className="location">
              <h3><EnvironmentFilled /> Head Office</h3>
              <p>International finacial centre 2 lt 19</p>
              <p>Lt send close 20244</p>
            </div>
          </div>
          <div className="contact">
            <p><PhoneFilled /> +234 982766282</p>
            <p><PhoneFilled /> +234 982766282</p>
            <p><MailFilled /> Jesttract@email.com</p>
          </div>
          <div className="socials">
            <a href=""><FacebookFilled /></a>
            <a href=""><TwitterCircleFilled /></a>
            <a href=""><LinkedinFilled /></a>
            <a href=""><MailFilled /></a>
            <a href=""><InstagramFilled /></a>
            <a href=""><GoogleCircleFilled /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;