import './app.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/layouts/navigation/NavBar/navbar';
import HeroSection from './components/layouts/herosection/heroSection';
import About from './components/layouts/about/about';
import Service from './components/layouts/service/service';
import Footer from './components/layouts/footer/footer';
import Company from './components/layouts/company/company';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <HeroSection />
        <About />
        <Service />
        <Company />
        <Footer />
      </>
    </Router>
  );
}

export default App;
