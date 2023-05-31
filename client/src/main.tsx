import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../src/assets/styles/index.css";
import {AuthProvider} from "./context/auth";
import PublicLayout from "./layout/PublicLayout";
import PrivateLayout from "./layout/PrivateLayout";

import HomePage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import PostPage from "./pages/Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
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
        path: "*",
        element: <ErrorPage />,
      },
    ],
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
