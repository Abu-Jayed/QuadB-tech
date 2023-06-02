import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import DataDetail from "../Components/DataDetail/DataDetail";
import AllData from "../Components/AllData/AllData";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      children:[
        {
          path: '/',
          element: <AllData></AllData>
        },
        {
          path: 'detail/:id',
          element: <DataDetail></DataDetail>,
        }
      ]
    }
    
  ]);