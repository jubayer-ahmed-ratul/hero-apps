import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>home layout</h2>,
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