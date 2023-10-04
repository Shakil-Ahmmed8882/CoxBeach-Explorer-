import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Home";
import Login from "../Components/Form/Login";
import Register from "../Components/Form/Register";

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
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
            path:'*',
            element:<div className="flex w-full h-screen items-center justify-center text-9xl font-bold">404</div>
      }
    ],
  },
]);

export default router;
