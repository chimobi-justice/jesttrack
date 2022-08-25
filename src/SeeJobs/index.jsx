import React, { Component } from 'react';
import '../styles/seeJob.scss';
import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';
import { SeeAllJobs } from '../Constant/SeeAllJobs';
import { Truncate } from '../helper/truncate';
import ButtonReturn from '../Components/ButtonReturn';

class SeeJobs extends Component {
  render() {
    return (
      <>
        <Link to="/"><ButtonReturn /></Link>
        <div className="seeJobs" id="seeJobs">
          <div className="seeJobs-content">
            <h2>Find your Dream Career</h2>
            <h3>Professionals Are Waiting For You
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Harum, nostrum nisi aliquam delectus quaerat
              dolore molestias illo consectetur nesciunt provident
            </p>
          </div>

          <Row className="seeJobs-path" justify="space-between">
            {
              SeeAllJobs.map((seeJob) => (
                <Col span={4} className="seeJobs-path-box">
                  <img src={seeJob.assetImage} alt={seeJob.assetHeading} />
                  <h4>{seeJob.assetHeading}</h4>
                  <p className='seeJobs-path-text'>{ Truncate(seeJob.assetText, 17)}</p>
                </Col>
              ))
            }
          </Row>
        </div>
      </>
    );
  }
}

export default SeeJobs;