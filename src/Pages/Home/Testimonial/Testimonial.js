import { Avatar, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testimonial = ({ review }) => {
    const { name, address, description, img } = review;
    return (
        <Paper elevation={0} style={{ padding: '15px', border: '1px solid gray' }}>
            <Typography variant='body1'>
                {description}
            </Typography>
            <Box sx={{display: 'flex', alignItems:'center', mt: 3, ml: 2}}>
                <Avatar
                    alt="Remy Sharp"
                    src={img}
                    sx={{ width: 65, height: 65 }}
                />
                <Box sx={{ml: 2}}>
                    <Typography variant='h6' sx={{color: '#F5831F'}}>{name}</Typography>
                    <Typography variant='h6'>{address}</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default Testimonial;