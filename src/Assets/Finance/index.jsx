import React, { Component } from "react";
import '../../styles/finance.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import testImg from '../../images/HR.svg'

class Finance extends Component {
  render() {
    return (
      <div className="asset-finance">
        <Row justify="space-between" className="asset-finance-wrapper">
          <Col span="12" className="asset-finance-wrapper-box" id="flex-box">
            <div>
              <img src={testImg} />
            </div>
            <div>
              <h4>Finances</h4>
              <p>Finance Generalist, Supervisor, Hiring Partner...</p>
              <Link to=''>Click <ArrowRightOutlined /></Link>
            </div>
          </Col>
          <Col span="5" className="asset-finance-wrapper-box">
            <img src={testImg} />
            <h4>Recruitment Admin</h4>
            <p>Finance Generalist, Finance Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-finance-wrapper-box">
            <img src={testImg} />
            <h4>Finance Department Head</h4>
            <p>Finance Generalist, Finance Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>

        <Row justify="flex-start" className="asset-finance-wrapper">
          <Col span="5" className="asset-finance-wrapper-box">
            <img src={testImg} />
            <h4>Payroll Admin</h4>
            <p>Finance Generalist, Finance Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-finance-wrapper-box">
            <img src={testImg} />
            <h4>Finance Auditor</h4>
            <p>Finance Generalist, Finance Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-finance-wrapper-box">
            <img src={testImg} />
            <h4>Finance Supervisor</h4>
            <p>Finance Generalist, Finance Admin, Supervisor, Hiring Partner...</p>
            <Link to=''>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Finance;