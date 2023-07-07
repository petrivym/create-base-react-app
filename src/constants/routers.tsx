import RootLayout from "../components/RootLayout";
import ErrorPage from "../page/ErrorPage";
import UserCard from "../page/UserCard";

const users_ID = "users/:id";

export const paths = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/${users_ID}`,
        element: <UserCard />,
      }
    ],
  },
];
