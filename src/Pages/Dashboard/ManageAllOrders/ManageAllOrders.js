import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {

    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/orders/manage')
            .then(res => setManageOrders(res.data))
    }, []);

    const handleDeleteOrder = id => {
        const confirmation = window.confirm("Do you want to delete order?");
        if (confirmation) {
            axios.delete(`http://localhost:5000/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remainingOrder = manageOrders.filter(order => order._id !== id);
                        setManageOrders(remainingOrder);
                    }
                })
        }
    };

    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Typography
                variant='h4'
                sx={{ mb: 4, fontWeight: 500 }}
            >
                Manage All Orders
            </Typography>
            {
                !manageOrders.length ? <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <CircularProgress />
                </Box>
                    :
                    <Grid container
                        sx={{}}
                        spacing={{ xs: 2, md: 4 }}
                        columns={{ xs: 8, md: 12 }}>
                        {
                            manageOrders.map(manageOrder => <ManageAllOrder
                                key={manageOrder._id}
                                manageOrder={manageOrder}
                                handleDeleteOrder={handleDeleteOrder}
                            />)
                        }
                    </Grid>
            }
        </Box>
    );
};

export default ManageAllOrders;
