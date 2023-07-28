import { Box } from "@mui/material";
import { User } from "../../types";
import { UserCard } from "./userCard/userCard";

type Props = {
  users: User[];
};

const UsersList = ({ users = [] }: Props) => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
      {users.map((_) => (
        <UserCard user={_} />
      ))}
    </Box>
  );
};

export default UsersList;
