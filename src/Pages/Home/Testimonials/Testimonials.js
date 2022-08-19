import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from '../Testimonial/Testimonial';
import { Typography } from '@mui/material';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => setReviews(res.data))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Container style={{ marginBottom: '60px', padding: '0 50px' }}>
            <Typography
                variant='h4'
                sx={{ mb: 5, fontWeight: 500, color: '#F5831F' }}
            >
                Testimonials
            </Typography>
            <Slider {...settings}>
                {
                    reviews.map(review => <Testimonial
                        key={review._id}
                        review={review}
                    />)
                }
            </Slider>
        </Container>
    );
};

export default Testimonials;