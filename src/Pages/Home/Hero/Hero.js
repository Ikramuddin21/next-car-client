import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import heroBanner from '../../../images/heroBanner.jpg';

const heroBgStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600

}

const Hero = () => {
    return (
        <Box style={heroBgStyle}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;