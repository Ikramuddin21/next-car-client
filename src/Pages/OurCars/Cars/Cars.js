import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Product from '../../Home/Product/Product';

const Cars = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
    }, []);

    return (
        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Container style={{ padding: '0 50px' }}>
                <Typography
                    variant='h3'
                    sx={{ mb: 5, fontWeight: 500 }}
                >
                    Our All Collection
                </Typography>
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Cars;