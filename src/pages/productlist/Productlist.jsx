import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

const Productlist = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Productlist;
