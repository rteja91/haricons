import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactForm = () => {
    return (
        <section className="my-5">

            <p className="lead text-center w-responsive mx-auto font-weight-bold">
                Have a Query on Engineering Excellence. Please Reach Haricons...
            </p>
            <MDBRow>
                <MDBCol lg="5" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody >
                            <div className="form-header accent-1">
                                <h3 className="mt-2">
                                    <MDBIcon icon="envelope" /> Write to us:
                </h3>
                            </div>
                            <p className="dark-grey-text">
                                Don't be shy, just write to us.
              </p>
                            <div className="md-form">
                                <MDBInput
                                    icon="user"
                                    label="Your name"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-name"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="envelope"
                                    label="Your email"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-email"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="tag"
                                    label="Subject"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-subject"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="pencil"
                                    label="Text..."
                                    iconClass="grey-text"
                                    type="textarea"
                                    id="form-text"
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="orange">Submit</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="7">
                    <div id="map-container"
                        className="rounded z-depth-1-half map-container"
                        style={{ height: "500px" }} >
                        <iframe
                            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJGcczqUbXuDsR_KVstTMGXcg&key=AIzaSyCHCuE3eTdbRPRyC9uH_FkQMg1H8z-hkmk"
                            title="Haricons Constructions"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                        />
                    </div>

                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
                <MDBCol md="4">
                    <MDBBtn tag="a" floating color="orange" className="accent-1">
                        <MDBIcon icon="map-marker" />
                    </MDBBtn>
                    <p>Shop No 01,3rd Floor,</p>
                    <p>'D' Block,Shindhe Complex,</p>
                    <p>Neeligin Road,NCM HUBLI.</p>
                    <p className="mb-md-0">India - 580029</p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBBtn tag="a" floating color="orange" className="accent-1">
                        <MDBIcon icon="phone" />
                    </MDBBtn>
                    <p>+ 91-836-2258225</p>
                    <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBBtn tag="a" floating color="orange" className="accent-1">
                        <MDBIcon icon="envelope" />
                    </MDBBtn>
                    <p>info@haricons.in</p>
                    <p className="mb-md-0">contactus@haricons.in</p>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default ContactForm;