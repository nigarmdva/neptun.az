import React from "react";
import { CartPage } from "../../components/CartPage/CartPage";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
function CartPageStr() {
  return (
    <>
      <Header />
      <CartPage />
      <Footer />
    </>
  );
}

export default CartPageStr;
