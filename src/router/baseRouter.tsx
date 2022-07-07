import Home from "@/pages/home";
import Todo from "@/pages/todo";
import User from "@/pages/user";
import UserAccount from "@/pages/user/account";
import React from "react";
import { RouteObject } from "react-router-dom";

const routers: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: '/user',
      // element: <Navigate to='/user/index' />,
      children: [
        {
            path: 'index',
            element: <User />,
        },
        {
            path: 'account',
            element: <UserAccount />,
        },
      ],
    }
  ];

export default routers
