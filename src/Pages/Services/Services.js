import React, { Component } from 'react';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import OurServices from './Sections/OurServices';


class Services extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 className="text-center" style={{ backgroundColor: "#f7941e", padding: "10px 5px", color: "#fff", fontWeight: "400" }}>Our Services</h1>
                <OurServices />
                <Footer />
            </div>
        );
    }
}

export default Services;