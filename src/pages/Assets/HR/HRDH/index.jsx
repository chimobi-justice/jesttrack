import { Component } from "react";
import { Link } from "react-router-dom";

import '../../../../styles/HR/HR_HRDH.scss';

import NavBar from "../../../../Components/NavBar";
import Footer from "../../../../Components/Footer";
import ButtonReturn from "../../../../Components/ButtonReturn";

import { Row, Col, Divider, Button } from 'antd';
import {
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
  GoogleCircleFilled,
  MailFilled,
  ArrowRightOutlined,

} from "@ant-design/icons";

import testImg from '../../../../images/HR.svg'

class HRDH extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Link to="/assets?tab=hr"><ButtonReturn /></Link>

        <div className="asset-hr-HRDH">
          <Row className="asset-hr-HRDH-vacancy-title" justify="space-between">
            <Col><h3 className="other-vacancy-text-left">Vacancy Detail</h3></Col>
            <Col><h3 className="other-vacancy-text-right">Other Vacancies in this division</h3></Col>
          </Row>

          <Row className="asset-hr-HRDH-wrapper" justify="space-between">
            <Col span={18} className="asset-hr-HRDH-Box-left">
              <div className="assets-hr-HRDH-info-top">
                <Row justify="space-between">
                  <Col>
                    <img src={testImg} alt="" />
                  </Col>
                  <Col>
                    <h3>Human Resources Department Head</h3>
                    <p>Human Resources Devision</p>
                    <div className="assets-hr-HRDH-info-socials">
                      <a href=""><FacebookFilled /></a>
                      <a href=""><TwitterCircleFilled /></a>
                      <a href=""><LinkedinFilled /></a>
                      <a href=""><MailFilled /></a>
                      <a href=""><InstagramFilled /></a>
                      <a href=""><GoogleCircleFilled /></a>
                    </div>
                  </Col>
                </Row>
                <div>
                  <Link to=''><Button type="primary">Apply Now</Button></Link>
                </div>
              </div>
              <Divider orientation="center" />

              <h3>Absolute Vacancy Description</h3>
              <div className="text-content">
                <h4>scope</h4>
                <p>You wii support the full spectrum of Human Resources excecution 
                  from Payroll, Adminitration, Performance Management, Recruitement and Training 
                </p>
              </div>

              <div className="text-content">
                <h4>Responsibilitirs</h4>
                <p>&bull; Bridging Management &amp; employee relations by addressing demands, grievances or other challenge.</p>
                <p>&bull; Plan, execute, monitoring, evaluate all culture engagement program with growth mindset and nurture a positive working environment.</p>
                <p>&bull; Moltivating &amp; improving the end employee journey to support change management strategy</p>
                <p>&bull; Provide guidance to branch heads, Managers in managing performance issues at all levels, including performance coaching and 
                  Performance improvement plans, and provide support with staff outreach when needed.</p>
                <p>&bull; Design, execute, monitoring &amp; evaluating Performance Appraisal &amp; people development program.</p>
                <p>&bull; Design, develop organize &amp; facilitate the fit training program for employee.</p>
                <p>&bull; Manage all the recruitement, remuneration and benefit within organization.</p>
              </div>

              <div className="text-content">
                <h4>Requirements</h4>
                <p>Great integrity &amp; experience as Professional Human Resource/Human Capital for minimum 7 years.</p>
                <p>Excellent leadership skill with strong problem solving &amp; Excellent communication skills.</p>
                <p>Proactive, influencing and motivation.</p>
                <p>Logistics &amp; Cargo background will be interesting.</p>
                <p>Bachelor degree preferred.</p>
              </div>
            </Col>
            <Col span={5} className="asset-hr-HRDH-Box-right">
              <div className="asset-hr-HRDH-Box-right-container">
                <div>
                  <img src={testImg} />
                </div>
                <div>
                  <h4>Payroll Admin</h4>
                  <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
                  <Link to='/assets/HR-payroll-admin'>Click <ArrowRightOutlined /></Link>
                </div>
              </div>

              <div className="asset-hr-HRDH-Box-right-container">
                <div>
                  <img src={testImg} />
                </div>
                <div>
                  <h4>HR Supervisor</h4>
                  <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
                  <Link to='/assets/HR-supervisor'>Click <ArrowRightOutlined /></Link>
                </div>
              </div>

              <div className="asset-hr-HRDH-Box-right-container">
                <div>
                  <img src={testImg} />
                </div>
                <div>
                  <h4>HR Auditor</h4>
                  <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
                  <Link to='/assets/HR-auditor'>Click <ArrowRightOutlined /></Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}

export default HRDH;