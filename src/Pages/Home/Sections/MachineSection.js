import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import Machinery from '../../Machinery/Machinery';
import m1 from './images/excavator.jpg';
import m2 from './images/paverfinisher.png';
import m3 from './images/soilcompator.jpeg';
import m4 from './images/tipper.jpg';
import m5 from './images/vibrator2.jpg';
import m6 from './images/concrete.jpg';

const MachineSection = () => {
    return (
        <section className="text-center ">
            <h2 className="h1-responsive font-weight-bold text-center my-2">Our Machinery</h2>
            <p className="grey-text text-center w-responsive mx-auto mb-3">We have adequate amount of machinery needed for all kinds of needs</p>
            <MDBCarousel activeItem={1} length={2} slide={true} showControls={false} showIndicators={true} multiItem>
                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">
                            <MDBCol md="4" className="pull-left">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage cascade top src={m1} alt="Excavator" style={{ maxHeight: "200px" }} />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5></h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!">Excavators</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block pull-left">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage cascade top src={m2} alt="Paver Finisher" style={{ maxHeight: "200px" }} />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5></h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!">Paver Finisher</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block pull-left">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage cascade top src={m3} alt="Paver Finisher" style={{ maxHeight: "200px" }} />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5></h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!">Soil Compactor</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBCol md="4" className="pull-left">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage cascade top src={m4} alt="Tippers" style={{ maxHeight: "200px" }} />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5></h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!">Tippers</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block pull-left">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage
                                        cascade
                                        top
                                        src={m5}
                                        alt="Vibrators"
                                        style={{ maxHeight: "200px", maxWidth: "80%" }}
                                        className="pl-4"
                                    />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5></h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!">Vibrators</a>
                                            </strong>
                                        </MDBCardTitle>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4" className="clearfix d-none d-md-block pull-left">
                                <MDBCard narrow ecommerce className="mb-2">
                                    <MDBCardImage cascade top src={m6} alt="Concrete Cutter" style={{ maxHeight: "200px", maxWidth: "80%" }} />
                                    <MDBCardBody cascade>
                                        <a href="#!" className="text-muted">
                                            <h5></h5>
                                        </a>
                                        <MDBCardTitle>
                                            <strong>
                                                <a href="#!">Concrete Cutter</a>
                                            </strong>
                                        </MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBCarouselItem>
                    </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        </section>
    );
}

export default MachineSection;