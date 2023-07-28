import { Button, Card, Typography } from "@mui/material";
import { User } from "../../../types";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../constants";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  return (
    <Card sx={{ p: "20px" }}>
      <Typography variant="body1">First Name: {user.firstName}</Typography>
      <Typography variant="body1">last Name : {user.lastName}</Typography>
      <Typography variant="body1">Gender : {user.gender}</Typography>
      <Typography variant="body1">Color : {user.hair.color}</Typography>
      <NavLink to={ROUTES.user(user.id.toString())}>
        <Button variant="contained" color="secondary" size="small" sx={{ mt: "1rem", textTransform: "capitalize" }}>
          User detail info
        </Button>
      </NavLink>
    </Card>
  );
};
