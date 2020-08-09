import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class Corosel extends Component{
    render(){
        return(
            <Carousel className="carosuel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://medcitynews.com/uploads/2019/06/GettyImages-949292570.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://medcitynews.com/uploads/2019/06/GettyImages-949292570.jpg"
                    alt="Third slide"
                    />

                   </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://medcitynews.com/uploads/2019/06/GettyImages-949292570.jpg"
                    alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>

        );
    }
}


export default Corosel;