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
      <Typography variant="h6">{user.firstName}</Typography>
      <Typography variant="h6">{user.lastName}</Typography>
      <Button>
        <NavLink to={ROUTES.user(user.id.toString())}>
          Users details
        </NavLink>
      </Button>
    </Card>
  );
};
