import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layouts from "../Layouts/Layouts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>
    },
  ]);