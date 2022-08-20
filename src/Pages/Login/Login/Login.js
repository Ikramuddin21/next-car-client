import { Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [registerInfo, setRegisterInfo] = useState({});

    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newInfo = { ...registerInfo };
        newInfo[name] = value;
        setRegisterInfo(newInfo);
    };

    return (
        <Container sx={{textAlign: 'center', mt: 5}}>
            <Link to="/">
            <img style={{ width: 100 }} src='https://i.ibb.co/NYgZQtS/logo.png' alt='' />
            </Link>
            <form style={{maxWidth: "450px", margin: '40px auto', padding: '25px 0', display: "flex", flexDirection: 'column', alignItems: 'center', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px'}}>
                <Typography variant="h4">Please Login</Typography>
                <TextField
                sx={{width: '93%', mt: 3}}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                sx={{width: '93%', mt: 3}}
                    id="standard-basic"
                    label="Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <Button sx={{width: '93%', mt: 6, mb: 3}} type="submit" variant="contained">Login</Button>
                <Link to="/register">
                    <Button variant="text">New User? Please Register</Button>
                </Link>
                <Button sx={{width: '93%', mt: 5}} style={{background: '#F5831F'}} variant="contained">Google Sign In</Button>
            </form>
        </Container>
    );
};

export default Login;