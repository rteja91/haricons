import React, { Component } from 'react';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import MachineSection from '../Home/Sections/MachineSection';

class Machinery extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 className="text-center" style={{ backgroundColor: "#f7941e", padding: "10px 5px", color: "#fff", fontWeight: "400" }}>Machinery</h1>

                <MachineSection />

                <Footer />

            </div>
        );
    }
}

export default Machinery;