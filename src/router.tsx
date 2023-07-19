import RootLayout from "./components/RootLayout";
import ErrorHandler from "./components/errorHandler/ErrorHandler";
import { ROUTES } from "./constants";
import NoMatchPage from "./page/NoMatchPage";
import { loader as loaderUser } from "./page/UserDetailPage";
import UserDetailPage from "./page/UserDetailPage";
import UsersListPage from "./page/UsersListPage";
import { getUsers } from "./services/networking";

export const paths = [
  {
    paths: ROUTES.base,
    element: <RootLayout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        element: <UsersListPage />,
        index: true,
        loader: getUsers,
      },
      {
        path: ROUTES.user(),
        element: <UserDetailPage />,
        loader: loaderUser,
      },
      {
        path: ROUTES.all,
        element: <NoMatchPage />,
      },
    ],
  },
];
