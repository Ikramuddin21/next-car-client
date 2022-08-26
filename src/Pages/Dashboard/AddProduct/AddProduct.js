import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({});
  const [successAddProduct, setSuccessAddProduct] = useState(false);

  const handleOnBlur = (e) => {
    setSuccessAddProduct(false);
    const name = e.target.name;
    const value = e.target.value;
    const newProduct = { ...addProduct };
    newProduct[name] = value;
    setAddProduct(newProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/products", addProduct).then((res) => {
      if (res.data.insertedId) {
        setSuccessAddProduct(true);
        e.target.reset();
      }
    });
  };
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Add A New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          marginTop: "40px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Title"
          name="title"
          onBlur={handleOnBlur}
          required
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="Price"
          name="price"
          onBlur={handleOnBlur}
          required
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="Image Online URL"
          name="img"
          onBlur={handleOnBlur}
          required
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="Description"
          name="description"
          onBlur={handleOnBlur}
          multiline
          rows={3}
          required
          variant="outlined"
        />
        <Button sx={{ mt: 3 }} type="submit" variant="contained">
          Add Product
        </Button>
      </form>
      {successAddProduct && (
        <Alert style={{ maxWidth: "500px" }} severity="success">
          Successfully Added
        </Alert>
      )}
    </Box>
  );
};

export default AddProduct;
