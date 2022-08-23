import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ManageAllOrder = ({ manageOrder, handleDeleteOrder }) => {

    const { _id, title, description, price, img, userName, email } = manageOrder;

    return (
        <Grid item xs={8} md={6} style={{ maxWidth: 450 }}>
            <Card sx={{ background: "#f9f9f9" }}>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{ width: 60, height: 60 }}
                            src="https://i.ibb.co/2KWBv2F/empty-image.jpg"
                            aria-label="recipe" />
                    }

                    title={<Typography variant="h6" color="#F5831F" fontSize="18px">
                        {userName}
                    </Typography>}
                    subheader={<Typography variant="body1" color="text.secondary">
                        {email}
                    </Typography>}
                />
                <CardMedia
                    component="img"
                    image={img}
                    alt=""
                />
                <CardContent>
                    <Typography sx={{ mb: 1 }} variant="h6">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2, justifyContent: "space-around" }}>
                        <Typography sx={{ color: "#F5831F" }} variant="h6">${price}</Typography>
                        <Button onClick={() => handleDeleteOrder(_id)} variant="contained">Delete</Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ManageAllOrder;