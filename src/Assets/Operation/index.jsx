import { Component } from "react";
import '../../styles/operation.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import testImg from '../../images/HR.svg'

class Operation extends Component {
  render() {
    return (
      <div className="asset-operation">
        <Row justify="space-between" className="asset-operation-wrapper">
          <Col span="12" className="asset-operation-wrapper-box" id="flex-box">
            <div>
              <img src={testImg} />
            </div>
            <div>
              <h4>Operation</h4>
              <p>Operation Generalist, Supervisor, Hiring Partner...</p>
              <Link to='/assets/OPERATION'>Click <ArrowRightOutlined /></Link>
            </div>
          </Col>
          <Col span="5" className="asset-operation-wrapper-box">
            <img src={testImg} />
            <h4>Recruitment Admin</h4>
            <p>Operation Generalist, Operation Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/OPERATION-recruitment-admin'>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-operation-wrapper-box">
            <img src={testImg} />
            <h4>Operation Department Head</h4>
            <p>Operation Generalist, Operation Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/OPERATION-department-head'>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>

        <Row justify="flex-start" className="asset-operation-wrapper">
          <Col span="5" className="asset-operation-wrapper-box">
            <img src={testImg} />
            <h4>Payroll Admin</h4>
            <p>Operation Generalist, Operation Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/OPERATION-payroll-admin'>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-operation-wrapper-box">
            <img src={testImg} />
            <h4>Operation Auditor</h4>
            <p>Operation Generalist, Operation Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/OPERATION-auditor'>Click <ArrowRightOutlined /></Link>
          </Col>
          <Col span="5" className="asset-operation-wrapper-box">
            <img src={testImg} />
            <h4>Operation Supervisor</h4>
            <p>Operation Generalist, Operation Admin, Supervisor, Hiring Partner...</p>
            <Link to='/assets/OPERATION-supervisor'>Click <ArrowRightOutlined /></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Operation;