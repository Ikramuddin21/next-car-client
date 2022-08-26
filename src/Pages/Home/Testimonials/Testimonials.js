import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from '../Testimonial/Testimonial';
import { Box, CircularProgress, Typography } from '@mui/material';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://guarded-ridge-49297.herokuapp.com/reviews')
            .then(res => setReviews(res.data))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container style={{ marginTop: '80px', padding: '0 50px' }}>
            <Typography
                variant='h4'
                sx={{ mb: 5, fontWeight: 500, color: '#F5831F' }}
            >
                Testimonials
            </Typography>
            {

                !reviews.length ? <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <CircularProgress />
                </Box> :
                    <Slider {...settings}>
                        {
                            reviews.map(review => <Testimonial
                                key={review._id}
                                review={review}
                            />)
                        }
                    </Slider>}
        </Container>
    );
};

export default Testimonials;