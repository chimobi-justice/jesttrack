import React, { Component } from "react";
import '../../styles/GA.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import testImg from '../../images/HR.svg'

class GA extends Component {
  render() {
    return (
      <div className="asset-GA">
        <Row justify="space-between" className="asset-GA-wrapper">
          <Col span="12" className="asset-GA-wrapper-box" id="flex-box">
            <div>
              <img src={testImg} />
            </div>
            <div>
              <h4>General Affairs</h4>
              <p>General Affairs Generalist,Supervisor, Hiring Partner...</p>
              <Link to=''>Click <ArrowRightOutlined /></Link>
            </div>
          </Col>
          <Col span="5" className="asset-GA-wrapper-box">
            <img src={testImg} />
            <h4>Recruitment Admin</h4>
            <p>General Affairs Generalist, Legal General Affairs, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-GA-wrapper-box">
            <img src={testImg} />
            <h4>General Affairs Department Head</h4>
            <p>General Affairs Generalist, General Affairs Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>

        <Row justify="flex-start" className="asset-GA-wrapper">
          <Col span="5" className="asset-GA-wrapper-box">
            <img src={testImg} />
            <h4>Payroll Admin</h4>
            <p>General Affairs Generalist, General Affairs Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-GA-wrapper-box">
            <img src={testImg} />
            <h4>General Affairs Auditor</h4>
            <p>General Affairs Generalist, General Affairs Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-GA-wrapper-box">
            <img src={testImg} />
            <h4>General Affairs Supervisor</h4>
            <p>General Affairs Generalist, General Affairs Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GA;