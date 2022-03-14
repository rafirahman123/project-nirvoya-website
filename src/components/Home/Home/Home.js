import React from 'react';
import Banner from '../Banner/Banner';
import Benifits from '../Benifits/Benifits';
import Category from '../Category/Category';
import FlashDeals from '../FlashDeals/FlashDeals';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Category></Category>
            <FlashDeals></FlashDeals>
            <Benifits></Benifits>
            <Footer></Footer>
        </div>
    );
};

export default Home;