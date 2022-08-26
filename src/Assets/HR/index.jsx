import { Component } from "react";
import '../../styles/HR.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import testImg from '../../images/HR.svg';

class HR extends Component {
  render() {
    return (
      <div className="asset-hr">
        <Row justify="space-between" className="asset-hr-wrapper">
          <Col span="12" className="asset-hr-wrapper-box" id="flex-box">
            <div>
              <img src={testImg} />
            </div>
            <div>
              <h4>Human Resources</h4>
              <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
              <Link to='/assets/HR'>Click <ArrowRightOutlined /></Link>
            </div>
          </Col>
          <Col span="5" className="asset-hr-wrapper-box">
            <img src={testImg} />
            <h4>Recruitment Admin</h4>
            <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/HR-recruitment-admin'>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-hr-wrapper-box">
            <img src={testImg} />
            <h4>HR Department Head</h4>
            <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/HR-human-resources-department-head'>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>

        <Row justify="flex-start" className="asset-hr-wrapper">
          <Col span="5" className="asset-hr-wrapper-box">
            <img src={testImg} />
            <h4>Payroll Admin</h4>
            <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/HR-payroll-admin'>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-hr-wrapper-box">
            <img src={testImg} />
            <h4>HR Auditor</h4>
            <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/HR-auditor'>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-hr-wrapper-box">
            <img src={testImg} />
            <h4>HR Supervisor</h4>
            <p>HR Generalist, HR Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/HR-supervisor'>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HR;