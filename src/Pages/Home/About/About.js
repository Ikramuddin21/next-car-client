import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import about from "../../../assets/images/about.jpg";

const About = () => {
  return (
    <Container style={{ marginTop: "80px", padding: "0 50px" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box>
            <Typography sx={{ color: "#F5831F", fontWeight: 500 }} variant="h5">
              About Us
            </Typography>
            <Typography
              style={{ margin: "10px 0", fontWeight: 500 }}
              variant="h4"
            >
              Welcome To
              <span style={{ color: "#F5831F" }}> Next Car</span>
            </Typography>
            <Typography sx={{ lineHeight: "27px" }} variant="body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              illum et error sed minus tempora, inventore iusto exercitationem
              nobis ipsam tenetur, commodi aut necessitatibus recusandae
              voluptates est quibusdam culpa vitae voluptas nam! Nobis
              blanditiis exercitationem id laboriosam cum delectus quidem
              consectetur quam ea soluta neque iusto, sequi distinctio modi
              possimus assumenda, excepturi sit enim deserunt tempore.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{ color: "#F5831F", fontWeight: 600 }}
                variant="h6"
              >
                Peter Berry
              </Typography>
              <Typography variant="body2">Honorable Chairman</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <img
            style={{ width: "100%", borderRadius: "5px" }}
            src={about}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
