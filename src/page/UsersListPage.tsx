import { useLoaderData } from "react-router-dom";
import CardsListMaterial from "../components/cardsListMatirial/CardsListMatirial";
import { GetUserResponse } from "../types";
import { Grid } from "@mui/material";

const UsersList = () => {
  const data = useLoaderData() as GetUserResponse;

  return (
    <Grid>
      <CardsListMaterial users={data.users} />
    </Grid>
  );
};

export default UsersList;