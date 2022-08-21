import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 8}}>
            <Typography variant="h4">Page not found</Typography>
            <Typography style={{marginTop: '10px'}} variant="h4">404!!!</Typography>
            <Link to="/" style={{marginTop: '10px'}}>
                <Button variant="contained">Go Home</Button>
            </Link>
        </Box>
    );
};

export default NotFound;