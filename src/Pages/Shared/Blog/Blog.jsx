import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Blog = ({ blog }) => {
  const { title, description, img } = blog;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="" height="200" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Blog;
