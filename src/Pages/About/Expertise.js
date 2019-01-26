import React from 'react';
import { MDBContainer } from 'mdbreact';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
const Expertise = () => {
    return (
        <div>
            <Header />

            <h1 className="text-center" style={{ backgroundColor: "#f7941e", padding: "10px 5px", color: "#fff", fontWeight: "400" }}>Our Expertise</h1>
            <MDBContainer>
                <h2>Our Core Strengths</h2>
                <ul style={{ fontWeight: "600" }}>
                    <li>150 Full time staff</li>
                    <li>Over one thousand temporary staff including skilled and unskilled manpower</li>
                    <li>Negligible senior management turnover</li>
                    <li>Professional and experienced management</li>
                    <li>In-depth understanding and knowledge of the domain</li>
                    <li>Proven track record of bidding, winning and executing large projects</li>
                </ul>
            </MDBContainer>
            <Footer />

        </div>
    );
};

export default Expertise;