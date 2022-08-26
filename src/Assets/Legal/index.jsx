import { Component } from "react";
import '../../styles/legal.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import testImg from '../../images/HR.svg'

class Legal extends Component {
  render() {
    return (
      <div className="asset-legal">
        <Row justify="space-between" className="asset-legal-wrapper">
          <Col span="12" className="asset-legal-wrapper-box" id="flex-box">
            <div>
              <img src={testImg} />
            </div>
            <div>
              <h4>Legal</h4>
              <p>Legal Generalist, Legal Admin, Supervisor, Hiring Partner...</p>
              <Link to=''>Click <ArrowRightOutlined /></Link>
            </div>
          </Col>
          <Col span="5" className="asset-legal-wrapper-box">
            <img src={testImg} />
            <h4>Recruitment Admin</h4>
            <p>Legal Generalist, Legal Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-legal-wrapper-box">
            <img src={testImg} />
            <h4>Legal Department Head</h4>
            <p>Legal Generalist, Legal Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>

        <Row justify="flex-start" className="asset-legal-wrapper">
          <Col span="5" className="asset-legal-wrapper-box">
            <img src={testImg} />
            <h4>Payroll Admin</h4>
            <p>Legal Generalist, Legal Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-legal-wrapper-box">
            <img src={testImg} />
            <h4>Legal Auditor</h4>
            <p>Legal Generalist, Legal Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-legal-wrapper-box">
            <img src={testImg} />
            <h4>Legal Supervisor</h4>
            <p>Legal Generalist, Legal Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Legal;