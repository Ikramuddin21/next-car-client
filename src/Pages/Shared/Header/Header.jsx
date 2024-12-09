import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { user, logout } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: "#1d3c45", height: 67 }}>
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Link aria-label="Go to home page" to="/">
              <img
                style={{ width: 65 }}
                src="https://i.ibb.co/NYgZQtS/logo.png"
                alt="Logo"
              />
            </Link>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link aria-label="Go to home page" to="/home">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    Home
                  </Typography>
                </MenuItem>
              </Link>
              <Link aria-label="Go to cars page" to="/cars">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    Our Cars
                  </Typography>
                </MenuItem>
              </Link>
              <Link aria-label="Go to blogs page" to="/blogs">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    Blog
                  </Typography>
                </MenuItem>
              </Link>
              {user?.email && (
                <Link aria-label="Go to dashboard page" to="/dashboard">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      Dashboard
                    </Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>

          {/* medium or upper device */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link aria-label="Go to home page" to="/">
              <img
                style={{ width: 65 }}
                src="https://i.ibb.co/NYgZQtS/logo.png"
                alt="Logo"
              />
            </Link>
            <Link
              aria-label="Go to home page"
              to="/home"
              style={{ marginLeft: "16px" }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Home
              </Button>
            </Link>
            <Link
              aria-label="Go to cars page"
              to="/cars"
              style={{ marginLeft: "16px" }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Our Cars
              </Button>
            </Link>
            <Link
              aria-label="Go to blogs page"
              to="/blogs"
              style={{ marginLeft: "16px" }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Blog
              </Button>
            </Link>
            {user?.email && (
              <Link
                aria-label="Go to dashboard page"
                to="/dashboard"
                style={{ marginLeft: "16px" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "16px",
                    textTransform: "capitalize",
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  Dashboard
                </Button>
              </Link>
            )}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            {user?.email && (
              <Typography variant="body1" marginRight={{ xs: 2, md: 3 }}>
                {user?.displayName}
              </Typography>
            )}
            {user?.email ? (
              <Button onClick={logout} variant="contained">
                Logout
              </Button>
            ) : (
              <Link aria-label="Go to login page" to="/login">
                <Button variant="contained">Login</Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
