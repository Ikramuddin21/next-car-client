import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const [order, setOrder] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false);
    const initialInfo = { userName: user.displayName, email: user.email, address: "" };
    const [userInfo, setUserInfo] = useState(initialInfo);
    const { title, description, price, img } = order;

    // const {}

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setOrder(res.data))
    }, [id]);

    // handle on change
    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newUser = { ...userInfo };
        newUser[name] = value;
        setUserInfo(newUser);
    };

    // handle order place
    const handleOrderPlace = e => {
        e.preventDefault();
        const newOrder = { ...userInfo, title, description, price, img };

        axios.post("http://localhost:5000/orders", newOrder)
            .then(res => {
                if (res.data.insertedId) {
                    setOrderSuccess(true);
                }
            })
    };

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
                    {
                        orderSuccess ? <Alert sx={{ width: "50%", mx: 'auto', mt: 2 }} severity="success">Order Place Successfull</Alert> :
                            <form onSubmit={handleOrderPlace} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "20px" }}>
                                <TextField
                                    sx={{ width: "50%" }}
                                    id="standard-basic"
                                    name="userName"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName || ""}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: "50%", mt: 3 }}
                                    id="standard-basic"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.email || ""}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: "50%", my: 3 }}
                                    id="standard-basic"
                                    name="address"
                                    placeholder="Address"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <Button type="submit" variant="contained">Order Place</Button>
                            </form>
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default PlaceOrder;