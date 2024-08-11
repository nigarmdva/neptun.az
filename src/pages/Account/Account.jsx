import React from "react";
import AccountItems from "../../components/AccountItems/AccountItems";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Searchbar from "../../layout/header/Header";

const Account = () => {
  return (
    <>
      <Header />
      <AccountItems />
      <Footer />
    </>
  );
};

export default Account;
