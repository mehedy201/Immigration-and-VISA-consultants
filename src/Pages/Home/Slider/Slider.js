import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider1.png'
import slider2 from '../../../images/slider2.png'
import slider3 from '../../../images/slider3.png'
import './Slider.css'

const Slider = () => {
    return (
        <div className='home_slider'>
            <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>Study in</h5>
                    <h1>Europe</h1>
                    <h6>Travel & Tourism, Engineering, Business, Health, Science, IT and many more…</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h5>No IELTS</h5>
                    <h1>NO INTERVIEW</h1>
                    <h6>Top Ranked Universities, No Age Limit, Low Living Cost, Work Allowed and many more…</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                    <h5>Buisness in</h5>
                    <h1>Europe</h1>
                    <h6>I will give you Buisness visa you are able to business in Europe</h6>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;