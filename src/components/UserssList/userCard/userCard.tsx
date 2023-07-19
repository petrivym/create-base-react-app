import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../constants";

export const UserCard = () => {
  return <NavLink to={ROUTES.base}>Users List</NavLink>;
};
