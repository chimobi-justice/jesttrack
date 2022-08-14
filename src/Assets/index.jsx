import { Component } from "react";
import '../styles/assets.scss';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";
import { returnButton } from "../backButton/backButton.styles";
import { Assets } from "../Constant/Assets";
import HR from "./HR";
import Operation from "./Operation";
import Finance from "./Finance";
import Legal from "./Legal";
import GA from "./GA";

class PageAssets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabNumber: 1,
    }

    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(id) {
    this.setState({
      tabNumber: id
    });
  }

  render() {
    return (
      <>
        <div style={returnButton}>
          <Link to="/"><Button type='primary'><ArrowLeftOutlined /> return</Button></Link>
        </div>
        <div className="assets" id="assets">
          <div className="assets-content">
            <h2>Find your Dream Career</h2>
            <h3>Professionals Are Waiting For You
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Harum, nostrum nisi aliquam delectus quaerat
              dolore molestias illo consectetur nesciunt provident
            </p>
          </div>

          <Row className="assets-path" justify="space-between">
            {
              Assets.map((asset) => (
                <Col
                  key={asset.id}
                  className="assets-path-box"
                  onClick={
                    () => this.handleTab(asset.id)
                  }>
                  <img src={asset.assetImage} alt={asset.assetText} />
                  <h4 style={
                    {
                      color: asset.id === this.state.tabNumber && '#2873ff',
                      textDecoration: asset.id === this.state.tabNumber && 'underline'
                    }
                  }>
                    {asset.assetText}
                  </h4>
                </Col>
              ))
            }
          </Row>

          {this.state.tabNumber === 1 ? (
            <HR />
          ) : this.state.tabNumber === 2 ? (
            <Operation />
          ) : this.state.tabNumber === 3 ? (
            <Finance />
          ) : this.state.tabNumber === 4 ? (
            <GA />
          ) : (
            <Legal />
          )}
        </div>
      </>
    );
  }
}

export default PageAssets;