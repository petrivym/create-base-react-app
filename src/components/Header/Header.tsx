import { Typography, styled } from "@mui/material";

const StyledHeader = styled(`header`)(({theme}) =>({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: ".5rem"
}))

const Header = () => {
  return (
    <StyledHeader>
      <Typography variant="h3">Users App</Typography>
    </StyledHeader>
  )
};

export default Header;
