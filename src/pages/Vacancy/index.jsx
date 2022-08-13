import react, { Component } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

class Vacancy extends Component {
    render() {
        return (
            <>
                <NavBar />
                <h1>Vacancy</h1>

                <Footer />
            </>
        );
    }
}

export default Vacancy;