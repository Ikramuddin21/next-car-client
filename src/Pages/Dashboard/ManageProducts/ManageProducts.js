import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../Shared/Product/Product';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
    }, []);

    // handle delete order
    const handleDeleteOrder = id => {
        const confirmation = window.confirm("Do you want to delete product?");
        if (confirmation) {
            axios.delete(`http://localhost:5000/products/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remainingOrder = products.filter(product => product._id !== id);
                        setProducts(remainingOrder);
                    }
                })
        }
    };

    return (
        <Box sx={{ flexGrow: 1, my: 2 }}>
            <Container sx={{ mx: 0 }}>
                <Typography
                    variant='h4'
                    sx={{ mb: 5, fontWeight: 500 }}
                >
                    Manage Products
                </Typography>
                {
                    !products.length ? <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <CircularProgress />
                    </Box>
                        :
                    <Grid container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            >
                                <Button onClick={() => handleDeleteOrder(product._id)} variant='contained'>Delete</Button>
                            </Product>)
                        }
                    </Grid>
                }
            </Container>
        </Box>
    );
};

export default ManageProducts;
