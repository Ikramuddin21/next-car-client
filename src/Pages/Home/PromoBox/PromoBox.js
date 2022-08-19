import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import promoBg from '../../../images/promo-banner.jpg';
import promoCar from '../../../images/promo-car.png';

const PromoBox = () => {

    const promoBgStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${promoBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        marginBottom: 70
    };

    return (
        <Box style={promoBgStyle}>
            <Container style={{padding: '20px 50px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                <img style={{width: '90%'}} src={promoCar} alt="" />
                    </Grid>
                    <Grid item xs={12} md={5} sx={{display: 'flex', alignItems: 'center'}}>
                        <Box>
                            <Typography variant='h4' sx={{ color: 'white', fontWeight: 600, mb: 4 }}>Do You Want To Earn With Us? So Don't Be Late.</Typography>
                            <Button variant='contained' style={{background: '#F5831F'}}>Become a Driver</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default PromoBox;