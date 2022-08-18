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
import { Link } from 'react-router-dom';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='sticky' sx={{ background: '#1d3c45', height: 67 }}>
            <Container>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Link to='/'>
                            <img style={{ width: 65 }} src='https://i.ibb.co/NYgZQtS/logo.png' alt='' />
                        </Link>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
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
                            <Link to='/home'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center' sx={{ color: 'black' }}>Home</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/cars'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center' sx={{ color: 'black' }}>Our Cars</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/about'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center' sx={{ color: 'black' }}>About</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/dashboard'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center' sx={{ color: 'black' }}>Dashboard</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/'>
                            <img style={{ width: 65 }} src='https://i.ibb.co/NYgZQtS/logo.png' alt='' />
                        </Link>
                        <Link to='/home'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, ml: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to='/cars'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, ml: 2, color: 'white', display: 'block' }}
                            >
                                Our Cars
                            </Button>
                        </Link>
                        <Link to='/about'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, ml: 2, color: 'white', display: 'block' }}
                            >
                                About
                            </Button>
                        </Link>
                        <Link to='/dashboard'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, ml: 2, color: 'white', display: 'block' }}
                            >
                                Dashboard
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <Typography marginRight={{ xs: 2, md: 3 }}>User Name</Typography>
                        <Button variant='contained'>Login</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
