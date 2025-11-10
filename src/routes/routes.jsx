import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../Layout/HomeLayout";
import ApplicationsPage from "../pages/ApplicationsPage";
import InstallationPage from "../pages/InstallationPage";
import ApplicationPage from "../pages/ApplicationPage";
import NoApps from "../components/NoApps"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "apps",
        element: <ApplicationsPage />,
      },
      {
        path: "no-apps", 
        element: <NoApps />,
      },
      {
        path: "installations",
        element: <InstallationPage />,
      },
      {
        path: "apps/:id",
        element: <ApplicationPage />, 
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>authentication layout</h2>,
  },
  {
    path: "/*",
    element: <h2>error 404</h2>,
  },
]);

export default router;
