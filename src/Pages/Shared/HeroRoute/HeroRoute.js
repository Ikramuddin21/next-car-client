import { Box, Typography } from '@mui/material';
import React from 'react';
import heroRouteBanner from '../../../images/hero-route-banner.jpg';
import { useLocation, Link } from 'react-router-dom';

const HeroRoute = ({ heading }) => {

    const { pathname } = useLocation();

    const heroRouteBgStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroRouteBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 550
    };
    return (
        <Box style={heroRouteBgStyle}>
            <Typography
                variant='h3'
                sx={{ color: 'white', fontWeight: 500 }}
            >
                {heading ? heading : pathname.replace('/', '').charAt(0).toUpperCase() + pathname.slice(2)}
            </Typography>
            <Box sx={{ mt: 1 }}>
                <Link to='/'>
                    <Typography
                        variant='h5'
                        component='span'
                        sx={{ color: 'white', pr: 2, borderRight: '3px solid white' }}
                    >
                        Home
                    </Typography>
                </Link>
                <Typography
                    variant='h5'
                    component='span'
                    sx={{ color: '#F5831F', ml: 2, fontWeight: 600 }}
                >
                    {heading ? heading : pathname.replace('/', '').charAt(0).toUpperCase() + pathname.slice(2)}
                </Typography>
            </Box>
        </Box>
    );
};

export default HeroRoute;