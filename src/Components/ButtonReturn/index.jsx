import React, { Component } from "react";
import {
styledButtonReturnContainer,
styledButtonReturnWrapper,
styledButtonReturn
} from "./ButtonReturn.styles";

import { ArrowLeftOutlined } from "@ant-design/icons";

class ButtonReturn extends Component {
  render() {
    return (
      <div style={styledButtonReturnContainer}>
        <div style={styledButtonReturnWrapper}>
          <button style={styledButtonReturn}><ArrowLeftOutlined /> Return</button>
        </div>
      </div>
    );
  }
}

export default ButtonReturn;