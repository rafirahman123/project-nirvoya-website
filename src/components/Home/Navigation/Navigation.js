import React from 'react';
import './Navigation.css';
import profile from '../../../image/icons/Profile.png';
import whitelist from '../../../image/icons/Stroke 1.png';
import mycart from '../../../image/icons/Vector (3).png';
import logo from '../../../image/icons/final png 1.png';
import serachicon from '../../../image/icons/searchicon.png';


const Navigation = () => {
    return (
        <div className='container'>
            <div className='navigation-section'>
                <nav class="navbar navbar-light bg-white">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="" width="80" height="40" />
                        </a>
                        <form class="d-flex input-items nav-form">
                            <input class="form-control input-search " type="search" placeholder="I'm looking for..." aria-label="Search"></input>
                            <button class="search-button border-0 rounded" type="submit"><img className='search-icon' src={serachicon} alt="" /></button>
                        </form>
                        <div className='d-flex nav-icon mt-3'>
                            <p className='icon-class'>login</p>
                            <img className='icon-text' src={profile} alt="" />
                            <p className='icon-class'>whitelist</p>
                            <img className='icon-text' src={whitelist} alt="" />
                            <p className='icon-class'>My cart</p>
                            <img className='icon-text' src={mycart} alt="" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;