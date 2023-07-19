import { Box, Card, Typography } from "@mui/material";
import { User } from "../../types";

type Props = {
  users: User[];
};

const CardsListMaterial = ({ users = [] }: Props) => {
  return (
    // grid використати гріди для вирівнювання висоти()
    <Box sx={{}}>
      {users.map((_) => (
        <Card sx={{p: "20px"}}>
          <Typography variant="h6">{_.firstName}</Typography>
          <Typography variant="h6">{_.lastName}</Typography>
        </Card>
      ))}
    </Box>
  );
};

export default CardsListMaterial;
