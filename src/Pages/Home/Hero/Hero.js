import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import heroBanner from '../../../assets/images/hero-banner.jpg';
import heroCar from '../../../assets/images/hero-car2.png';

const Hero = () => {

    const heroBgStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${heroBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <Box height={{ xs: 'auto', md: 600 }} style={heroBgStyle}>
            <Container style={{ padding: '20px 50px' }}>
                <Grid container spacing={2}>
                    <Grid item
                        xs={12} md={6}
                        sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box textAlign={{ xs: 'center', md: 'left' }}>
                            <Typography
                                variant='h2'
                                sx={{
                                    color: 'white',
                                    fontSize: { xs: 45, md: 65 },
                                    fontWeight: 600
                                }}>
                                Your Next Car Is Here
                            </Typography>
                            <Typography
                                variant='body1'
                                sx={{
                                    color: 'lightgray',
                                    lineHeight: 2,
                                    mt: 2, mb: 3
                                }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dignissimos possimus aliquid. Rerum, libero veritatis id officiis dolores, ratione repellendus, inventore numquam rem fugit aperiam consequatur suscipit atque non libero.
                            </Typography>
                            <Link to='/cars'>
                                <Button
                                    variant='contained'
                                    sx={{ px: 4 }}
                                >
                                    All Cars
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={heroCar} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;