import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://next-car-server.onrender.com/blogs")
      .then((res) => setBlogs(res.data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Container style={{ padding: "0 50px" }}>
        <Typography variant="h4" sx={{ mb: 5, fontWeight: 500 }}>
          Popular Blogs
        </Typography>
        {!blogs.length ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {blogs.map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Blogs;
