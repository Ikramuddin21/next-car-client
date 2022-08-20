import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceOrder = () => {

    const [order, setOrder] = useState({});
    const { id } = useParams();
    // const {}

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setOrder(res.data))
    }, []);

    return (
        <Container style={{ padding: '0 50px' }} sx={{ my: 10 }}>
            <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '100%', border: '15px solid white' }} src={order.img} alt="" />
                </Grid>
                <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
                    <Typography variant='body1'>{order.description}</Typography>
                    <Typography variant='h4' sx={{ my: 3 }}>{order.title}</Typography>
                    <Typography variant='h5' sx={{ color: '#F5831F', fontWeight: 500 }}>${order.price}</Typography>
                </Grid>
            </Grid>
            <Box>
                <form >
                    <TextField
                        id="standard-basic"
                        label="email"
                        name="email"
                        // value="email"
                        variant="standard" />

                </form>
            </Box>
        </Container>
    );
};

export default PlaceOrder;