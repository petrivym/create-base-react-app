import RootLayout from "./components/RootLayout/RootLayout";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import { ROUTES } from "./constants";
import { loader as loaderUser } from "./page/UserDetailPage";
import UserDetailPage from "./page/UserDetailPage";
import UsersListPage from "./page/UsersListPage";
import { loader as loaderUsers } from "./page/UsersListPage";

export const paths = [
  {
    paths: ROUTES.base,
    element: <RootLayout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        element: <UsersListPage />,
        index: true,
        loader: loaderUsers,
      },
      {
        path: ROUTES.user(),
        element: <UserDetailPage />,
        loader: loaderUser,
      },
    ],
  },
];
