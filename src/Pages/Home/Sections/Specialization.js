import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

const Specialization = () => {
    return (
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Why Haricons?
      </h2>
            <h3 className="text-center my-2 font-weight-bold">WE EXCEL AND MAKE OUR MARK IN ALL OUR WORKS</h3>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">

                <br></br>
                We are a diversified group with  following areas of expertise:
      </p>

            <MDBRow>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="certificate" size="2x" className="blue-text px-4" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">24 X 7 Water Supply & Environment</h4>
                            <p className=" text-justify">
                                Haricons has executed 21 different  24 X 7 Water Supply projects solving water problems for people and 3 major Under ground drainage systems  in Karanataka & Andhrapradesh.
              </p>
                            {/* <MDBBtn color="primary" size="sm">
                                Learn more
              </MDBBtn> */}
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="tint" size="2x" className="pink-text px-4" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Irrigation</h4>
                            <p className=" text-justify">
                                Survey, Design, Supply, Installation, Testing and commissioning, <strong>the lift irrigation scheme of feeding Kanavalli tank in Haveri Taluk, Haveri District. </strong>
                            </p>
                            {/* <MDBBtn color="pink" size="sm">
                                Learn more
              </MDBBtn> */}
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="road" size="2x" className="purple-text px-4" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Transportation</h4>
                            <p className="text-justify">
                                Haricons has made significant Contribution in building 8 different rural & urban road projects in Haveri & Dharwad Areas of Karnataka during past 14 years.
              </p>
                            {/* <MDBBtn color="purple" size="sm">
                                Learn more
              </MDBBtn> */}
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="building" size="2x" className="blue-text px-4" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Buildings & Industrial Structures</h4>
                            <p className="text-justify">
                                Haircons has completed two major Housing projects with <strong>200+ houses in Karanataka & SEZ Office in Andhra Pradesh.</strong>
                            </p>
                            {/* <MDBBtn color="purple" size="sm">
                                Learn more
              </MDBBtn> */}
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="bolt" size="2x" className="pink-text px-4" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Power Distribution & Transmission</h4>
                            <p className="text-justify">
                                Built two major Power transmission & Distribution Projects for HESCOM, Karnataka.
              </p>
                            {/* <MDBBtn color="purple" size="sm">
                                Learn more
              </MDBBtn> */}
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="wrench" size="2x" className="purple-text px-4" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Operations and Maintenance</h4>
                            <p className="text-justify">
                                Operations & Maintenance Projects in water supply, sewerage, buildings, roads, irrigation and
power distribution projects with further focus on backward integration including all allied
civil engineering works.
                            </p>
                            {/* <MDBBtn color="purple" size="sm">
                                Learn more
              </MDBBtn> */}
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default Specialization;