import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../Layout/HomeLayout";
import ApplicationsPage from "../pages/ApplicationsPage"
import InstallationPage from "../pages/InstallationPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"apps",
        element:<ApplicationsPage/>
      },{
        path:"installations",
        element:<InstallationPage />
      }
    ]
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