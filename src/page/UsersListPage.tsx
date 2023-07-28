import { useLoaderData } from "react-router-dom";
import CardsList from "../components/UsersList/UsersList";
import { GetUserResponse } from "../types";
import { Grid } from "@mui/material";
import FilterBar from "../components/FilterBar/FilterBar";
import { useState, useEffect } from "react";
import { FilterValue } from "../constants/filterConsts";
// import { getUsersByParam } from "../services/networking";

const UsersListPage = () => {
  const data = useLoaderData() as GetUserResponse;
  const [filterValue, setFilterValue] = UseChangeGender();

  // console.log(data)
  return (
    <Grid container spacing={4} my="1rem">
      <Grid item xs={3}>
        <FilterBar filterValue={filterValue} setFilterValue={setFilterValue} />
      </Grid>
      <Grid item xs={9}>
        <CardsList users={data.users} />
      </Grid>
    </Grid>
  );

  function UseChangeGender() {
    const [filterValue, setFilterValue] = useState<FilterValue>("all");
      
      // useEffect(() => {
      //   getUsersByParam("gender", "male").then(e => console.log(e))
      // }, []);

    return [filterValue, setFilterValue] as const;
  }
};

export default UsersListPage;
