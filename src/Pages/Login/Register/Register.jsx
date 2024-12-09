import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({});
  const {
    user,
    error,
    setError,
    isLoading,
    registerNewUser,
    signInUsingGoogle,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnBlur = (e) => {
    setError(false);
    const name = e.target.name;
    const value = e.target.value;
    const newInfo = { ...registerInfo };
    newInfo[name] = value;
    setRegisterInfo(newInfo);
  };

  // handle google sign in
  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, navigate);
  };

  // handle register submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerInfo.password !== registerInfo.password2) {
      alert("Your password did not match");
      return;
    }

    registerNewUser(
      registerInfo.email,
      registerInfo.password,
      registerInfo.name,
      navigate
    );
    e.target.reset();
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Link aria-label="Go to home page" to="/">
        <img
          style={{ width: 100 }}
          src="https://i.ibb.co/NYgZQtS/logo.png"
          alt="Logo"
        />
      </Link>
      {error && (
        <Alert sx={{ width: "50%", mx: "auto" }} severity="error">
          {error}
        </Alert>
      )}
      {user?.email && (
        <Alert sx={{ width: "50%", mx: "auto" }} severity="success">
          Successfully Register
        </Alert>
      )}
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <form
          onSubmit={handleRegisterSubmit}
          style={{
            maxWidth: "450px",
            margin: "40px auto",
            padding: "25px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
          }}
        >
          <Typography variant="h4">Please Register</Typography>
          <TextField
            sx={{ width: "93%", mt: 3 }}
            id="standard-basic"
            label="Name"
            name="name"
            required
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "93%", mt: 3 }}
            id="standard-basic"
            label="Email"
            type="email"
            name="email"
            required
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "93%", mt: 3 }}
            id="standard-basic"
            label="Password"
            type="password"
            name="password"
            required
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "93%", mt: 3 }}
            id="standard-basic"
            label="Confirm password"
            type="password"
            name="password2"
            required
            onBlur={handleOnBlur}
            variant="standard"
          />
          <Button
            sx={{ width: "93%", mt: 6, mb: 3 }}
            type="submit"
            variant="contained"
          >
            Register
          </Button>
          <Link aria-label="Go to login page" to="/login">
            <Button variant="text">Already Registered? Please Login</Button>
          </Link>
          <Button
            onClick={handleGoogleSignIn}
            sx={{ width: "93%", mt: 5 }}
            style={{ background: "#F5831F" }}
            variant="contained"
          >
            Google Sign In
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Register;
