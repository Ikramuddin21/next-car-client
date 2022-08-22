import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({});
    const { user, error, isLoading, loginUser, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newInfo = { ...loginInfo };
        newInfo[name] = value;
        setLoginInfo(newInfo);
    };

    // handle login submit
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginInfo.email, loginInfo.password, location, navigate);
        e.target.reset();
    };

    // handle google sign in 
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, navigate);
    };

    return (
        <Container sx={{ textAlign: 'center', mt: 5 }}>
            <Link to="/">
                <img style={{ width: 100 }} src='https://i.ibb.co/NYgZQtS/logo.png' alt='' />
            </Link>
            {error &&
                <Alert
                    sx={{ width: "50%", mx: 'auto' }}
                    severity="error"
                >{error}</Alert>}
            {user?.email &&
                <Alert sx={{ width: "50%", mx: 'auto' }} severity="success">Successfully Login</Alert>}
            {
                isLoading ? <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <CircularProgress />
                </Box> :

                    <form onSubmit={handleLoginSubmit} style={{ maxWidth: "450px", margin: '40px auto', padding: '25px 0', display: "flex", flexDirection: 'column', alignItems: 'center', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px' }}>
                        <Typography variant="h4">Please Login</Typography>
                        <TextField
                            sx={{ width: '93%', mt: 3 }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            name="email"
                            required
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '93%', mt: 3 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            required
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <Button sx={{ width: '93%', mt: 6, mb: 3 }} type="submit" variant="contained">Login</Button>
                        <Link to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </Link>
                        <Button onClick={handleGoogleSignIn} sx={{ width: '93%', mt: 5 }} style={{ background: '#F5831F' }} variant="contained">Google Sign In</Button>
                    </form>
            }
        </Container>
    );
};

export default Login;