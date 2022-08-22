import { Alert, Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState("");
    const [successAdmin, setSuccessAdmin] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    };

    const handleAdminSubmit = e => {
        e.preventDefault();

        const user = { email }
        axios.put("http://localhost:5000/users/admin", user)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setSuccessAdmin(true);
                    e.target.reset();
                }
            })
    };

    return (
        <Box>
            <form onSubmit={handleAdminSubmit} style={{ maxWidth: "450px", display: "flex", alignItems: "center" }}>
                <TextField
                    sx={{ width: "100%" }}
                    id="outlined-basic"
                    label="Email"
                    onBlur={handleOnBlur}
                    required
                    variant="outlined"
                />
                <Button sx={{ ml: 2 }} type="submit" variant="contained">Admin</Button>
            </form>
            {successAdmin && <Alert style={{ maxWidth: "450px" }} severity="success">Successfully Make Admin</Alert>}
        </Box>
    );
};

export default MakeAdmin;