import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopingCartPage from "./pages/ShopingCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <ShopingCartPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
