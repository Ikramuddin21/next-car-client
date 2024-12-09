import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeroRoute from '../../Shared/HeroRoute/HeroRoute';
import Cars from '../Cars/Cars';

const OurCars = () => {
    return (
        <>
            <Header />
            <HeroRoute heading="All Cars" />
            <Cars />
            <Footer />
        </>
    );
};

export default OurCars;