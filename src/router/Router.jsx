import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Account from "../pages/Account/Account";
import Productlist from "../pages/productlist/Productlist";
import Product from "../pages/Product/Product";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/:category/:subCategory",
    element: <Productlist />,
  },
  {
    path: "/:category/:subCategory/:title/:id",
    element: <Product />,
  },
]);
