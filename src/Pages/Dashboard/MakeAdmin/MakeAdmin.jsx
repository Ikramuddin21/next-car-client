import { Alert, Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [successAdmin, setSuccessAdmin] = useState(false);
  const [error, setError] = useState(false);

  const handleOnBlur = (e) => {
    setError(false);
    setSuccessAdmin(false);
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();

    const user = { email };
    axios
      .put("https://next-car-server.onrender.com/users/admin", user)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setSuccessAdmin(true);
          setError(false);
          e.target.reset();
        } else {
          setError(true);
          setSuccessAdmin(false);
        }
      });
  };

  return (
    <Box>
      <form onSubmit={handleAdminSubmit} style={{ maxWidth: "450px" }}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Email"
          onBlur={handleOnBlur}
          required
          variant="outlined"
        />
        <Button sx={{ my: 2, px: 3 }} type="submit" variant="contained">
          Admin
        </Button>
      </form>
      {error && (
        <Alert style={{ maxWidth: "450px" }} severity="error">
          Invalid User
        </Alert>
      )}
      {successAdmin && (
        <Alert style={{ maxWidth: "450px" }} severity="success">
          Successfully Make Admin
        </Alert>
      )}
    </Box>
  );
};

export default MakeAdmin;
