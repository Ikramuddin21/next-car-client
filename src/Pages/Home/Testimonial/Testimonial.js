import { Avatar, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Testimonial = ({ review }) => {
  const { name, address, description, img } = review;
  return (
    <Paper
      elevation={0}
      sx={{
        padding: "15px",
        background: "#d3d3d3cc",
        transition: "0.5s",
        "&:hover": { background: "#0D353A", color: "lightgray" },
      }}
    >
      <Typography variant="body1" textAlign={{ xs: "center", sm: "left" }}>
        {description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 3,
          ml: 2,
        }}
        flexDirection={{ xs: "column", sm: "unset" }}
      >
        <Avatar alt="Remy Sharp" src={img} sx={{ width: 65, height: 65 }} />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h6" sx={{ color: "#F5831F" }}>
            {name}
          </Typography>
          <Typography variant="h6">{address}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Testimonial;
