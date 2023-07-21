import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Grid container>
      <Outlet></Outlet>
      <Grid item xs={12}>Pagination</Grid>
    </Grid>
  );
};

export default RootLayout;
