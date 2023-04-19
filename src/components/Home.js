import { Container, Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth='lg' sx={{ bgcolor: "green" }}>
      <Box maxWidth='xs' m={3} sx={{ backgroundColor: "cyan" }}>
        <Typography variant='h2'>Hello World</Typography>
      </Box>
    </Container>
  );
};

export default Home;
