import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Partners from '../../Shared/Partners/Partners';
import About from '../About/About';
import Blogs from '../../Shared/Blogs/Blogs';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import PromoBox from '../PromoBox/PromoBox';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Products />
            <PromoBox />
            <Testimonials />
            <Partners />
            <Blogs />
            <Footer />
        </>
    );
};

export default Home;