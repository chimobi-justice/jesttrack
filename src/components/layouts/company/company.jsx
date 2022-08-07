import React, { Component } from "react";
import '../../../styles/company.scss';
import company1 from '../../../images/company1.jpg';
import company2 from '../../../images/company2.jpg';
import company5 from '../../../images/company5.jpg';

import { Row, Col } from 'antd';



class Company extends Component {
    render() {
        return (
            <div className="company">
                <div className="life-at-company-content">
                    <h2>Life At Our Company</h2>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing
                    </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. Harum, nostrum nisi aliquam delectus quaerat 
                        dolore molestias illo consectetur nesciunt provident 
                    </p>
                </div>

                <div className="life-at-company-sections">
                    <div className="company-text-image">
                        <div>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        
                        <div>
                            <img src={company5} alt="" />
                        </div>
                    </div>

                    <Row gutter={12} className="company-images">
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
        );
    }
}

export default Company;