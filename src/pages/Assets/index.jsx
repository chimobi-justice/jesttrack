import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import PageAssets from "../../Assets";
import Footer from "../../Components/Footer";

class AssetsTab extends Component {
  render() {
    return (
      <>
        <NavBar />
        <PageAssets />
        <Footer />
      </>
    );
  }
}

export default AssetsTab;