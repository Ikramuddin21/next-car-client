import React from 'react';
import Header from '../../Shared/Header/Header';
import Partners from '../../Shared/Partners/Partners';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import PromoBox from '../PromoBox/PromoBox';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Products />
            <PromoBox />
            <Testimonials />
            <Partners />
        </>
    );
};

export default Home;