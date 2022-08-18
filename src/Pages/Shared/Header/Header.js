import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ background: "#1d3c45", height: 85 }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            textDecoration: 'none',
                        }}
                    >
                        <img style={{ width: 60 }} src="https://i.ibb.co/NYgZQtS/logo.png" alt="" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <img style={{ width: 60 }} src="https://i.ibb.co/NYgZQtS/logo.png" alt="" />
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Our Products</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">About</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Dashboard</Typography>
                            </MenuItem>
                        </Menu>

                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, ml: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, ml: 2, color: 'white', display: 'block' }}
                        >
                            Our Products
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, ml: 2, color: 'white', display: 'block' }}
                        >
                            About
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, ml: 2, color: 'white', display: 'block' }}
                        >
                            Dashboard
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                        <Typography marginRight={{ xs: 2, md: 3 }}>User Name</Typography>
                        <Button variant="contained">Login</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
