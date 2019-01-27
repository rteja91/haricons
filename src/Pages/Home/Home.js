import React, { Component } from 'react';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import Herobanner from './Sections/Herobanner';
import MachineSection from './Sections/MachineSection';
import Specialization from './Sections/Specialization';



class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Herobanner />
                <Specialization />
                <MachineSection />
                {/* <h1 className="text-center mt-5">Coming Soon...</h1> */}
                <Footer />
            </div>
        );
    }
}

export default Home;