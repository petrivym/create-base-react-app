import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./router";
import { CircularProgress } from "@mui/material";

const router = createBrowserRouter(paths);

function App() {
  return <RouterProvider router={router} fallbackElement={<CircularProgress />} />;
}

export default App;
