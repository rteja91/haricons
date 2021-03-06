import React, { Component } from 'react';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import ContactForm from './Sections/ContactForm';
import { MDBContainer } from 'mdbreact';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 className="text-center" style={{ backgroundColor: "#f7941e", padding: "10px 5px", color: "#fff", fontWeight: "400" }}>Contact Us</h1>
                <MDBContainer>
                    <ContactForm />
                </MDBContainer>
                <Footer />

            </div>
        );
    }
}

export default Contact;