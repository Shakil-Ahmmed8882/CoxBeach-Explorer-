import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Home";
import Login from "../Components/Form/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ],
  },
]);

export default router;
