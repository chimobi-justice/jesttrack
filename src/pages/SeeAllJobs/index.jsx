import { Component } from 'react';
import NavBar from '../../Components/NavBar';
import SeeJobs from '../../SeeJobs';
import Footer from '../../Components/Footer';

class SeeAllJobs extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SeeJobs />
        <Footer />
      </>
    );
  }
}

export default SeeAllJobs;