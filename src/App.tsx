import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./router";
import Loader from "./components/Loader/Loader";
const router = createBrowserRouter(paths);

function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
