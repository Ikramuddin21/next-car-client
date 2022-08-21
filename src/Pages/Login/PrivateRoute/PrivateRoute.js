import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <CircularProgress />
        </Box>
    }
    return (
        user?.email ? <Outlet /> :
            <Navigate to="/login" state={{ from: location }} />
    );
};

export default PrivateRoute;