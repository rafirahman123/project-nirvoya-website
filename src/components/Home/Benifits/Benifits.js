import React from 'react';
import car from '../../../image/icons/Vector.png';
import star from '../../../image/icons/star.png';
import clock from '../../../image/icons/Vector (1).png';
import card from '../../../image/icons/Vector (2).png';

const Benifits = () => {
    return (
        <div>
            <section className='container my-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <p><img className='icon-text' src={car} alt="" />FREE SHIPPING</p>
                    </div>
                    <div className='col-md-3'>
                        <p ><img className='icon-text' src={star} alt="" />BEST PRICE</p>
                    </div>
                    <div className='col-md-3'>
                        <p ><img className='icon-text' src={clock} alt="" />FREE RETURN</p>
                    </div>
                    <div className='col-md-3'>
                        <p ><img className='icon-text' src={card} alt="" />SEQURE PAYMENT</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benifits;