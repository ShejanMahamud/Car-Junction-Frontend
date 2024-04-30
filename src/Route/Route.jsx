import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import Error from "../pages/Error";
import Root from './../layouts/Root';
import Home from './../pages/Home';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            path: '/',
            element: <Home/>
        }
    ],
    errorElement: <Error/>
  },
]);

export default Route