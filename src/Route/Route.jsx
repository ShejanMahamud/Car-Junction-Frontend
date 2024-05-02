import axios from 'axios';
import React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Checkout from "../pages/Checkout";
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
        },
        {
          path: '/checkout/:id',
          loader: ({params}) => axios.get(`https://car-junction-backend.vercel.app/service/${params.id}`),
          element: <Checkout/>
        }
    ],
    errorElement: <Error/>
  },
]);

export default Route