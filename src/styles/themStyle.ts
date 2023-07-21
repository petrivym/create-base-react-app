import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#2a9461",
    },
    background: {
      default: "#f5f5f5",
    },
    error: {
      main: red.A400,
    },
  },
  spacing: 8,
});

export default theme;
