import React from 'react';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
import hero1 from './images/1.jpg'
import hero2 from './images/roadconstruction.jpg'

const Herobanner = props => {
    return (
        <div>
            <Carousel activeItem={1} length={2} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner>
                    <CarouselItem itemId="1" >
                        <View>
                            <img className="d-block w-100" style={{ maxHeight: "500px" }} src={hero1} alt="First slide" />
                            <Mask overlay="black-light" />
                        </View>
                        <CarouselCaption>
                            <h3 className="h3-responsive">Experts in Building Sewage Treatment Plants</h3>
                            <p>Haricons Engineering Team has successfully completed 7 large water sewage Treatment plants in past 14 years.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="2" >
                        <View>
                            <img className="d-block w-100" style={{ maxHeight: "500px" }} src={hero2} alt="Road Constructions" />
                            <Mask overlay="black-strong" />
                        </View>
                        <CarouselCaption>
                            <h3 className="h3-responsive">Engineering Excellence in Building India's Infrastructure</h3>
                            <p>14 years of contribution to India's Roadways & Infrastructure</p>
                        </CarouselCaption>
                    </CarouselItem>
                </CarouselInner>
            </Carousel>
        </div>
    );
};



export default Herobanner;