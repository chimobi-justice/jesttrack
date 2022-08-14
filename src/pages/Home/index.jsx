import { Component } from "react";
import { Link } from 'react-router-dom';
import '../../styles/unlimitedCollaboration.scss';
import '../../styles/successJourney.scss';
import '../../styles/lifeAtCompany.scss';
import '../../styles/career.scss';

import NavBar from '../../Components/NavBar';
import HeroSection from "../../Herosection";
import Footer from "../../Components/Footer";
import { Truncate } from "../../helper/truncate";
import { Careers } from "../../Constant/career";

import unlimitedColloboration from '../../images/unlimitedColloboration.jpg';
import support from '../../images/support.png';
import customerService from '../../images/customer-service.png';
import location from '../../images/location.png';
import hour from '../../images/24-hours.png';
import imb from '../../images/ibm.png';
import google from '../../images/google.png';
import handshake from '../../images/handshake.png';
import investor from '../../images/investor.png';
import company1 from '../../images/company1.jpg';
import company2 from '../../images/company2.jpg';
import company5 from '../../images/company5.jpg';

import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";


class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HeroSection />

        <div className="unlimitedCollaborationWrapper" id="unlimitedCollaboration">
          <div className="unlimitedCollaborationImage">
            <img src={unlimitedColloboration} alt="" />
          </div>
          <div className="unlimitedCollaborationContent">
            <h2>Unlimited Collaborations</h2>
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

        <div className="success-journey-top" id="success-journey-top">
          <div className="success-journey-content">
            <h2>Maximize Your Potential With Us</h2>
            <h3>Be A Part Of Our Success Journey
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Harum, nostrum nisi aliquam delectus quaerat
              dolore molestias illo consectetur nesciunt provident
            </p>
          </div>

          <div id="successJourneyInfo">
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

        <div className="success-journey-bottom">
          <div className="success-journey-content">
            <h2>Cooperate with dozens of national banks</h2>
            <h3>We Provide The Most Reliable Service For All Banks In Nigeria
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Harum, nostrum nisi aliquam delectus quaerat
              dolore molestias illo consectetur nesciunt provident
            </p>

          </div>

          <div id="successJourneyInfo">
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

        <div className="life-at-company" id="life-at-company">
          <div className="life-at-company-content">
            <h2>Life At Our Company</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Harum, nostrum nisi aliquam delectus quaerat
              dolore molestias illo consectetur nesciunt provident
            </p>

            <Button type="primary">Read More <ArrowRightOutlined /></Button>
          </div>

          <div className="life-at-company-sections">
            <div className="life-at-company-text-image">
              <div>
                <h3>Life At Our Company</h3>
                <p>Coworker, Friends, Family</p>
              </div>

              <div>
                <img src={company5} alt="" />
              </div>
            </div>

            <Row justify="space-between" className="company-images">
              <Col span={12}>
                <img src={company1} alt="" className="com-img" />
              </Col>
              <Col span={12}>
                <img src={company2} alt="" className="com-img" />
              </Col>
              <Col span={12}>
                <img src={company2} alt="" className="com-img" />
              </Col>
              <Col span={12}>
                <img src={company1} alt="" className="com-img" />
              </Col>
            </Row>
          </div>
        </div>

        <div className="career" id="career">
          <div className="career-content">
            <h2>Find your Dream Career</h2>
            <h3>Professionals Are Waiting For You
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Harum, nostrum nisi aliquam delectus quaerat
              dolore molestias illo consectetur nesciunt provident
            </p>
          </div>

          <Row className="career-path" justify="space-between">
            {
              Careers.map((career) => (
                <Col
                  key={career.id}
                  span={4}
                  className="career-path-box"
                >
                  <img src={career.assetImage} alt={career.assetHeading} />
                  <h4>Human Resources</h4>
                  <p className="career-path-text">{Truncate(career.assetText)}</p>
                </Col>
              ))
            }
          </Row>

          <div className="see-all-btn">
            <Link to="/see-all-jobs"><Button type="primary">See all jobs <ArrowRightOutlined /></Button></Link>
          </div>

        </div>

        <Footer />
      </>

    );
  }
}

export default Home;