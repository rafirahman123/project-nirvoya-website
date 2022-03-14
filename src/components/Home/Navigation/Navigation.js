import React from 'react';
import './Navigation.css';
import profile from '../../../image/icons/Profile.png';
import whitelist from '../../../image/icons/Stroke 1.png';
import mycart from '../../../image/icons/Vector (3).png';
import logo from '../../../image/icons/final png 1.png';


const Navigation = () => {
    return (
        <div className='container'>
            <div className='navigation-section'>
                <nav class="navbar navbar-light bg-white">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="" width="80" height="40" />
                        </a>
                        <form class="d-flex input-items">
                            <input class="form-control input-search " type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="search-button border-0" type="submit">Search</button>
                            <p className='icon-class'><img className='icon-text' src={profile} alt="" />login</p>
                            <p className='icon-class'><img className='icon-text' src={whitelist} alt="" />whitelist</p>
                            <p className='icon-class'><img className='icon-text' src={mycart} alt="" />My cart</p>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;