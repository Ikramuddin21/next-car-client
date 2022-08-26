import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <Box
      sx={{ flexGrow: 1, background: "#28334AFF", color: "lightgray", mt: 11 }}
    >
      <Container style={{ padding: "0 50px" }}>
        <Grid container spacing={2} sx={{ py: 5, textAlign: "center" }}>
          <Grid item xs={12} md={4}>
            <Link to="/">
              <img
                style={{ width: 70 }}
                src="https://i.ibb.co/NYgZQtS/logo.png"
                alt=""
              />
            </Link>
            <Typography variant="body1" sx={{ fontSize: "15px", my: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              eius perspiciatis tenetur non, aliquam excepturi a saepe, in
              inventore soluta quis laudantium ex quod sed similique delectus
              animi ut eaque consequatur. Maxime voluptas earum dignissimos eos
              quas impedit ea iusto.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LocationOnIcon sx={{ mr: 1, color: "#F5831F" }} />
              <span>New York, USA</span>
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: { xs: "30px 0", md: "0" },
            }}
          >
            <Typography variant="h5">Quick Links</Typography>
            <List>
              <ListItem>
                <Link style={{ color: "lightgray" }} to="/home">
                  <ListItemText>Home</ListItemText>
                </Link>
              </ListItem>
              <ListItem>
                <Link style={{ color: "lightgray" }} to="/blogs">
                  <ListItemText>Blog</ListItemText>
                </Link>
              </ListItem>
              <ListItem>
                <Link style={{ color: "lightgray" }} to="/cars">
                  <ListItemText>Our Cars</ListItemText>
                </Link>
              </ListItem>
              <ListItem>
                <Link style={{ color: "lightgray" }} to="">
                  <ListItemText>Contact Us</ListItemText>
                </Link>
              </ListItem>
              <ListItem>
                <Link style={{ color: "lightgray" }} to="">
                  <ListItemText>Latest News</ListItemText>
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
            }}
          >
            <Typography sx={{ mb: 3 }} variant="h5">
              Opening Hours
            </Typography>
            <Box>
              <Box sx={{ display: "flex", mb: 1 }}>
                <AccessTimeIcon sx={{ mr: 1, color: "#F5831F" }} />
                <Box>
                  <Typography variant="body1" sx={{ fontSize: "15px" }}>
                    Saturday - Thursday
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "15px" }}>
                    08:00am - 09:50pm
                  </Typography>
                </Box>
              </Box>
              <Typography sx={{ display: "flex" }}>
                <CancelPresentationIcon sx={{ mr: 1, color: "#F5831F" }} />
                <Typography component="span" sx={{ fontSize: "15px" }}>
                  Friday Closed
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
              <Typography sx={{ color: "#F5831F", mb: 2 }} variant="body1">
                Follow Media :
              </Typography>
              <Link
                style={{
                  color: "white",
                  background: "#4064AC",
                  margin: "0 3px",
                  fontSize: "28px",
                  padding: "0 6px",
                }}
                to=""
              >
                <FacebookRoundedIcon />
              </Link>
              <Link
                style={{
                  color: "white",
                  background: "#4064AC",
                  margin: "0 3px",
                  fontSize: "28px",
                  padding: "0 6px",
                }}
                to=""
              >
                <InstagramIcon />
              </Link>
              <Link
                style={{
                  color: "white",
                  background: "#4064AC",
                  margin: "0 3px",
                  fontSize: "28px",
                  padding: "0 6px",
                }}
                to=""
              >
                <TwitterIcon />
              </Link>
              <Link
                style={{
                  color: "white",
                  background: "#4064AC",
                  margin: "0 3px",
                  fontSize: "28px",
                  padding: "0 6px",
                }}
                to=""
              >
                <GoogleIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography
        sx={{
          textAlign: "center",
          background: "#101820FF",
          py: 2,
        }}
        variant="body2"
      >
        Copyright &copy; Ikram Uddin - 2022
      </Typography>
    </Box>
  );
};

export default Footer;
