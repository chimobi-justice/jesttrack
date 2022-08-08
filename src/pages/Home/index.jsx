import { Component } from "react";
import NavBar from "../../components/NavBar";
import HeroSection from "../../components/herosection";
import About from "../../components/about";
import Service from "../../components/service";
import Company from "../../components/company";
import Footer from "../../components/footer";

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