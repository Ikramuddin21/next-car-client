import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import DashboardCommon from '../DashboardCommon/DashboardCommon';

const drawerWidth = 180;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, admin, logout } = useAuth();
    const {pathname} = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Link to="/">
                    <img style={{ width: 58 }} src='https://i.ibb.co/NYgZQtS/logo.png' alt='' />
                </Link>
            </Toolbar>
            <Divider />
            {
                user?.email && admin ? <List>
                    <Link to="manage-all-orders" style={{ color: "black" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ pl: 1 }}>Manage All Orders</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="add-product" style={{ color: "black" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ pl: 1 }}>Add A Product</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="make-admin" style={{ color: "black" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ pl: 1 }}>Make Admin</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="manage-products" style={{ color: "black" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ pl: 1 }}>Manage Products</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    {/* <Link to="" style={{ color: "black" }}> */}
                    <ListItem disablePadding onClick={logout}>
                        <ListItemButton>
                            <ListItemText sx={{ pl: 1 }}>Logout</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    {/* </Link> */}
                </List>
                    :
                    <List>
                        <Link to="my-orders" style={{ color: "black" }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={{ pl: 1 }}>My Orders</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="review" style={{ color: "black" }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={{ pl: 1 }}>Review</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="pay" style={{ color: "black" }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={{ pl: 1 }}>Pay</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        {/* <Link to="" style={{ color: "black" }}> */}
                        <ListItem disablePadding onClick={logout}>
                            <ListItemButton>
                                <ListItemText sx={{ pl: 1 }}>Logout</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        {/* </Link> */}
                    </List>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ml: 3}} noWrap component="div">
                        <Link to="/dashboard" style={{color: "white", marginRight: "5px"}}>Dashboard</Link>
                         <span style={{ color: "#BEE554", fontWeight: 600 }}>{user.displayName}</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                { pathname === "/dashboard" && <DashboardCommon />}
                <Outlet />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
