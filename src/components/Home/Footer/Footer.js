import React from 'react';
import './Footer.css';
import logo from '../../../image/icons/final png 1.png';
import headaphn from '../../../image/icons/headphn.png';
import footerimage from '../../../image/footerimage.png';


const Footer = () => {
    return (
        <div>
            <section className='container'>
                <div className='row'>
                    <div className='col-md-3 text-start for-mobile'>
                        <h6>CONTACT</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque enim vitae? Omnis qui illo ratione voluptatum, mollitia veniam cupiditate.</p>
                        <div className='row '>
                            <div className='col-3 text-start'>
                                <img src={headaphn} alt="" />
                            </div>
                            <div className='col-9 text-start'>
                                <p>Have any Quistions?</p>
                                <h6>099456789</h6>
                            </div>
                        </div>
                    </div>
                    <div className='footer-logo-section col-md-3'>
                        <img className=' mb-4' src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque saepe aperiam id veniam ad molestias cumque vero nisi a illo.</p>
                        <div class="social-icon">
                            <i class="fab fa-facebook mx-2"></i>
                            <i class="fab fa-twitter mx-2"></i>
                            <i class="fab fa-instagram-square mx-2"></i>
                            <i class="fab fa-youtube mx-2"></i>
                        </div>
                    </div>
                    <div className='col-md-3 text-start'>
                        <h6>QUICK LINKS</h6>
                        <p>About us</p>
                        <p>Contact Us</p>
                        <p>Products</p>
                        <p>Login</p>
                        <p>Sign Up</p>
                    </div>
                    <div className='col-md-3 text-start'>
                        <h6>CUSTOMER AREA</h6>
                        <p>My Account</p>
                        <p>Orders</p>
                        <p>Terms</p>
                        <p>Privacy Policy</p>
                        <p>Shipping Information</p>
                    </div>
                    <div className='col-md-3 text-start for-pc'>
                        <h6>CONTACT</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque enim vitae? Omnis qui illo ratione voluptatum, mollitia veniam cupiditate.</p>
                        <div className='row '>
                            <div className='col-3 text-start'>
                                <img src={headaphn} alt="" />
                            </div>
                            <div className='col-9 text-start'>
                                <p>Have any Quistions?</p>
                                <h6>099456789</h6>
                            </div>
                        </div>
                    </div>
                    <div class="social-icon-for-mobile">
                        <i class="fab fa-facebook mx-2"></i>
                        <i class="fab fa-twitter mx-2"></i>
                        <i class="fab fa-instagram-square mx-2"></i>
                        <i class="fab fa-youtube mx-2"></i>
                    </div>
                    <hr />
                    <div className='row my-4'>
                        <div className='col-md-4'>
                            <p className='text-center'>Projectnirvoya - © 2021 All Rights Reserved</p>
                        </div>
                        <div className='col-md-8'>
                            <h6 className='text-end text-primary payment-pic'>Pay With <img className='footer-img' src={footerimage} alt="" /></h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;