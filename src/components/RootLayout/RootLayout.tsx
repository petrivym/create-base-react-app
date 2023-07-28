import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Outlet></Outlet>
      </Grid>
      <Grid item xs={12}>
        Pagination
      </Grid>
    </Grid>
  );
};

export default RootLayout;
