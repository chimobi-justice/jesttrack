import { Component } from "react";
import '../styles/assets.scss';
import { Link } from 'react-router-dom';
import { withRouter } from "../HOC";

import { Row, Col } from 'antd';
import ButtonReturn from "../Components/ButtonReturn";
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
      urlParam: ''
    }

    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(id) {
    this.setState({
      tabNumber: id
    });
  }

  componentDidMount() {
    let urlParam = new URLSearchParams(window.location.search);

    if (urlParam) {
      this.setState({
        urlParam: urlParam.get('tab')
      });
    }

    switch (urlParam.get('tab')) {
      case 'hr':
        this.setState({ tabNumber: 1 });
        break;

      case 'operation':
        this.setState({ tabNumber: 2 });
        break;

      case 'finance':
        this.setState({ tabNumber: 3 });
        break;

      case 'general-affairs':
        this.setState({ tabNumber: 4 });
        break;

      case 'legal':
        this.setState({ tabNumber: 5 });
        break;
    }
  }

  render() {
    return (
      <>
        <Link to="/"><ButtonReturn /></Link>
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
                <Link to={`/assets?tab=${(asset.link)}`} key={asset.id}>
                  <Col
                    className="assets-path-box"
                    onClick={() => {
                      this.handleTab(asset.id)
                    }}
                  >
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
                </Link>
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

export default withRouter(PageAssets);