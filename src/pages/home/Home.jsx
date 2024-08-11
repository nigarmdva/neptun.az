import React from "react";
import Cards from "../../components/Cards/Cards";
import ControlledCarousel from "../../components/Carousel/ControlledCarousel";
import CategoriesDesk from "../../components/CategoriesDesktop/CategoriesDesk";
import HomeCatg from "../../components/HomeCatg/HomeCatg";
import SelectCatg from "../../components/SelectCatg/SelectCatg";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import styleHome from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "rgba(242,242,242,1)" }}>
        <div className={styleHome.homeContainer}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CategoriesDesk />
            <div className={styleHome.homeStructur}>
              <ControlledCarousel />
              <Cards />
            </div>
          </div>
          {/* <SelectCatg /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <HomeCatg />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
