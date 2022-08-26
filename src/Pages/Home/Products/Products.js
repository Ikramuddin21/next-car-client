import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../Shared/Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://guarded-ridge-49297.herokuapp.com/products')
            .then(res => setProducts(res.data.slice(0, 6)))
    }, []);
    return (
        <Box sx={{ flexGrow: 1, mt: 10 }}>
            <Container style={{ padding: '0 50px' }}>
                <Typography
                    variant='h3'
                    sx={{ mb: 5, fontSize: "40px", fontWeight: 500 }}
                >
                    Our Products
                </Typography>
                {
                    !products.length ? <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <CircularProgress />
                    </Box> :
                        <Grid container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                products.map(product => <Product
                                    key={product._id}
                                    product={product}
                                >
                                    <Link to={`/orders/${product._id}`}>
                                        <Button variant='contained'>Buy Now</Button>
                                    </Link>
                                </Product>)
                            }
                        </Grid>
                }
            </Container>
        </Box>
    );
};

export default Products;
