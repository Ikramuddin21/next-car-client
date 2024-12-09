import React from 'react';
import Blogs from '../../Shared/Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeroRoute from '../../Shared/HeroRoute/HeroRoute';
import Partners from '../../Shared/Partners/Partners';

const OurBlogs = () => {
    return (
        <>
            <Header />
            <HeroRoute />
            <Blogs />
            <Partners />
            <Footer />
        </>
    );
};

export default OurBlogs;