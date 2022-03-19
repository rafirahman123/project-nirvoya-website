import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../image/portrait-stylish-handsome-young-man 1.png';
import img2 from '../../../image/delivery-concept-handsome-Grocary.png';
import img3 from '../../../image/delivery-concept-handsome-african-american-delivery-man-health.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section className='container banner-section'>
                <div className='row'>
                    <div className="col-md-8">
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100 banner-img"
                                    src={img1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 banner-img"
                                    src={img1}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 banner-img"
                                    src={img1}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-4">
                        <div className='row'>
                            <div className="col-md-12">
                                <img src={img2} className="banner-img2 w-100 mb-3" alt="" />
                            </div>
                            <div className="col-md-12">
                                <img src={img3} className="banner-img2 w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;