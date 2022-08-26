import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const initialInfo = {
    name: user.displayName,
    img: "https://i.ibb.co/2KWBv2F/empty-image.jpg",
  };
  const [review, setReview] = useState(initialInfo);
  const [successReview, setSuccessReview] = useState(false);

  const handleOnBlur = (e) => {
    setSuccessReview(false);
    const name = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[name] = value;
    setReview(newReview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/reviews", review).then((res) => {
      if (res.data.insertedId) {
        setSuccessReview(true);
        e.target.reset();
      }
    });
  };
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Please Your Opinion
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
          label="City"
          name="address"
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
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="Message"
          name="description"
          onBlur={handleOnBlur}
          multiline
          rows={4}
          required
          variant="outlined"
        />
        <Button sx={{ mt: 3 }} type="submit" variant="contained">
          Submit
        </Button>
      </form>
      {successReview && (
        <Alert style={{ maxWidth: "500px" }} severity="success">
          Thand you, for your opinion.
        </Alert>
      )}
    </Box>
  );
};

export default Review;
