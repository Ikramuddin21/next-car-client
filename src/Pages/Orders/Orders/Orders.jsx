import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeroRoute from '../../Shared/HeroRoute/HeroRoute';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const Orders = () => {
    return (
        <>
            <Header />
            <HeroRoute heading='Orders' />
            <PlaceOrder />
            <Footer />
        </>
    );
};

export default Orders;