import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../src/assets/styles/index.css";
import {AuthProvider} from "./context/auth";
import {PublicLayout, PrivateLayout} from "./layout";
import {AuthRoute, PrivateRoute} from "./routes";
import {HomePage, ErrorPage, AboutPage, ContactPage, BlogPage, PostPage, Login, Register, Dashboard, DashboardPost, Profile} from "./pages";


const router = createBrowserRouter([
  {
    element: <AuthRoute redirectPath={"/"} />,
    children: [
      {
        path: "",
        element: <PublicLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
    ]
  },
  {
    element: <PrivateRoute redirectPath={"/login"} />,
    children: [
      {
        path: "/account",
        element: <PrivateLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/account/profile",
            element: <Profile />,
          },
          {
            path: "/account/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/account/dashboard/:id",
            element: <DashboardPost />,
          },
        ],
      },
    ]
  },
  {
    path: "",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <PostPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
