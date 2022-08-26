import React from "react";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import partnersBg from "../../../assets/images/partners-banner.jpg";

const Partners = () => {
  const partnersBgStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${partnersBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    maxWidth: "1100px",
    marginTop: "90px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "40px 50px",
    textAlign: "center",
    borderRadius: "5px",
  };

  return (
    <Container style={partnersBgStyle}>
      <Box width={{ xs: "100%", md: "90%" }} margin="auto">
        <Typography fontSize={{ xs: "35px", md: "45px" }} variant="h3">
          With Over <span style={{ color: "#F5831F" }}>210</span> Partners
          Locations
        </Typography>
        <Typography
          sx={{
            mt: 3,
            lineHeight: "25px",
            color: "lightgray",
            fontSize: "15px",
          }}
          variant="body2"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          architecto harum libero eaque sunt totam excepturi eligendi dolorum
          minima, animi molestiae placeat cumque ex hic quis quo repellat
          soluta.
        </Typography>
        <Box
          display={{ xs: "unset", md: "flex" }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <PhoneIcon sx={{ fontSize: 60 }} />
          <Box textAlign={{ xs: "center", md: "left" }} sx={{ ml: "20px" }}>
            <Typography fontSize="18px" variant="h6">
              Any questions, don't hesitate?
            </Typography>
            <Typography fontSize="18px" color="#F5831F" variant="h6">
              +888-334-5078
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Partners;
