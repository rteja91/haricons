import React from 'react';
import cls from './Footer.css';
import { Col, Container, Row, Footer, MDBIcon } from "mdbreact";
const FooterPage = props => {
    return (
        <Footer color="" className="font-small pt-4 mt-4" >
            <Container fluid className="grey lighten-5 text-center text-md-left">
                <Row>
                    <Col md="3">
                        <h5 className="title text-dark text-uppercase font-weight-bold mt-3 pt-2">Head Office</h5>
                        <hr className="teal orange-3 mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "60px" }} />
                        <address className="footer-color">
                            59F, Shakti Colony, <br />
                            2nd Stage, <br />
                            Hubli, <br />
                            Karantaka-580032 <br />
                        </address>
                    </Col>
                    <Col md="3">


                        <h5 className="title text-dark text-uppercase font-weight-bold mt-3 pt-2">Branch Office</h5>
                        <hr className="teal orange-3 mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "60px" }} />
                        <address className="footer-color">
                            New 25/10/311, <br />
                            New Military Colony, <br />
                            Near Nippo Factory, <br />
                            Nellore, Andhra Pradesh-524004
                            </address>

                    </Col>

                    <Col md="3">


                        <h5 className="title text-dark text-uppercase font-weight-bold mt-3 pt-2">Quick links</h5>
                        <hr className="teal orange-3 mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "60px" }} />
                        <ul style={{ paddingLeft: "0" }} >
                            <li className="list-unstyled">
                                <a href="/about" className="footer-color text-uppercase font-weight-bold">About us</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/expertise" className="footer-color text-uppercase font-weight-bold">Our Quality</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/expertise" className="footer-color text-uppercase font-weight-bold">Our Expertise</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="footer-color text-uppercase font-weight-bold">Careers</a>
                            </li>
                        </ul>


                    </Col>

                    <Col md="3">


                        <h5 className="title text-dark text-uppercase font-weight-bold pt-2 mt-3">Contact us</h5>
                        <hr className="teal orange-3 mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "60px" }} />
                        <div className="footer-color">
                            <MDBIcon icon="home" className="mr-3"></MDBIcon>+91-836-2258225<br />

                            <MDBIcon icon="phone" className="mr-3"></MDBIcon>+91-9876543210<br />

                            <MDBIcon icon="envelope" className="mr-3"></MDBIcon>info@haricons.in<br />
                        </div>

                        <h6 className="text-uppercase font-weight-bold">Social Media</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "60px" }} />
                        <div className="footer-color">

                            <a className="fb-ic footer-color" href="#">
                                <MDBIcon icon="facebook-f" className="fab mr-4"> </MDBIcon>
                            </a>

                            <a className="tw-ic footer-color" href="#">
                                <MDBIcon icon="twitter" className="fab  mr-4" />
                            </a>

                            <a className="gplus-ic footer-color" href="#">
                                <MDBIcon icon="google-plus" className="fab  mr-4" />

                            </a>

                            <a className="li-ic footer-color" href="#">
                                <MDBIcon icon="linkedin" className="fab  mr-4" />

                            </a>

                        </div>

                    </Col>
                </Row>


            </Container>
            <div className=" orange darken-3 footer-copyright text-center py-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="https://www.haricons.in" className="font-weight-bold"> haricons.in </a>
                </Container>
            </div>
        </Footer>
    );
};



export default FooterPage;