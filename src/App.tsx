import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./router";
import { Box, CircularProgress, Container, styled } from "@mui/material";
import Header from "./components/Header/Header";

const router = createBrowserRouter(paths);

const AppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

function App() {
  return (
    <AppContainer>
      <Header />
      <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
        <RouterProvider router={router} fallbackElement={<CircularProgress size={120} />} />
      </Container>
    </AppContainer>
  );
}

export default App;
