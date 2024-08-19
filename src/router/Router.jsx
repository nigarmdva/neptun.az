import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Account from "../pages/Account/Account";
import Productlist from "../pages/productlist/Productlist";
import Product from "../pages/Product/Product";
import CartPageStr from "../pages/CartPageStructur/CartPageStr";
import WishPage from "../pages/WishPage/WishPage";
import ContactPage from "../pages/ContactPage/ContactPage";

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
  {
    path: "/cart",
    element: <CartPageStr />,
  },
  {
    path: "/wish-list",
    element: <WishPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
