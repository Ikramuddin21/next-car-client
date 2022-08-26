import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container } from "@mui/system";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import Product from "../../Shared/Product/Product";
import { Link } from "react-router-dom";

const Cars = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://guarded-ridge-49297.herokuapp.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, my: 10 }}>
      <Container style={{ padding: "0 50px" }}>
        <Typography
          variant="h3"
          sx={{ mb: 5, fontSize: "40px", fontWeight: 500 }}
        >
          Our All Collection
        </Typography>
        {!products.length ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map((product) => (
              <Product key={product._id} product={product}>
                <Link to={`/orders/${product._id}`}>
                  <Button variant="contained">Buy Now</Button>
                </Link>
              </Product>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Cars;
