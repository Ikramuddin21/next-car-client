import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Product = ({ product, children }) => {
    const { title, description, price, img } = product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{
                maxWidth: 345, mt: 1, transition: '0.5s',
                '&:hover': {
                    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                    transform: 'translateY(-5px)'
                }
            }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    pb: 2
                }}>
                    <Typography
                        variant='h6'
                        sx={{ color: '#F5831F', fontWeight: 600 }}
                    >
                        ${price}
                    </Typography>
                    {children}
                </Box>
            </Card>
        </Grid>
    );
};

export default Product;