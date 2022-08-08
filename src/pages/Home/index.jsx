import { Component } from "react";
import NavBar from "../../NavBar";
import HeroSection from "../../herosection";
import About from "../../about";
import Service from "../../service";
import Company from "../../company";
import Footer from "../../footer";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HeroSection />
        <About />
        <Service />
        <Company />
        <Footer />
      </>

    );
  }
}

export default Home;