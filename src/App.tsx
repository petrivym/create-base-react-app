import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./constants";

const router = createBrowserRouter(paths);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
