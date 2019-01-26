import React, { Component } from 'react';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import OurStory from './Sections/OurStory';


class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 className="text-center" style={{ backgroundColor: "#f7941e", padding: "10px 5px", color: "#fff", fontWeight: "400" }}>Our Story</h1>
                <OurStory className="mt-2" />
                <Footer />

            </div>
        );
    }
}

export default About;