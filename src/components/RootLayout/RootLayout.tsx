import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// change to firs v
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Box
        sx={{ height: 50, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.main" }}
      >
        <Typography variant="h2">Header</Typography>
      </Box>
      <Container className="app">
        <Grid container spacing={2}>
          <Outlet></Outlet>
          <Grid xs={12}>Pagination</Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RootLayout;
