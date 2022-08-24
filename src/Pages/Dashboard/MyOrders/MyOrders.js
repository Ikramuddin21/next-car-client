import { Box, Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => setMyOrders(res.data))
    }, [user.email]);

    // handle delete order
    const handleDeleteOrder = id => {
        const confirmation = window.confirm("Are you want to delete order?");
        if (confirmation) {
            axios.delete(`http://localhost:5000/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remainingOrder = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrder);
                    }
                })
        }
    };

    return (
        <Box sx={{ flexGrow: 1, my: 2 }}>
            <Container sx={{mx: 0}}>
                {
                    !myOrders.length ? <Typography
                        variant='h4'
                        sx={{ mb: 5, fontWeight: 500 }}
                    >
                        No Order History
                    </Typography> :
                        <Typography
                            variant='h4'
                            sx={{ mb: 5, fontWeight: 500 }}
                        >
                            My All Orders
                        </Typography>}
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        !myOrders.length ?
                            <Box sx={{ ml: 3 }}>
                                <Typography
                                    variant='h6'
                                    sx={{ fontWeight: 500 }}
                                >
                                    Please back to home and order
                                </Typography>
                                <Link to="/">
                                    <Button sx={{ mt: 2 }} variant="contained">Go Home</Button>
                                </Link>
                            </Box> :
                            myOrders.map(product => <MyOrder
                                key={product._id}
                                product={product}
                                handleDeleteOrder={handleDeleteOrder}
                            />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default MyOrders;