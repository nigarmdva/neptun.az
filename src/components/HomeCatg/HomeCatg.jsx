import React, { useState } from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import homecatgStyle from "./homecatg.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeCatg = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: 1,
      name: "Meyvə",
      image: "/img/catg1.jpg",
      cards: [
        {
          id: 16,
          title: "MVT.GREYFRUT KG",
          price: 2.35,
          img: "https://neptun.az/image/cache/catalog/MVT.GREYFRUTKG-270x270.jpg?v=9",
        },
        {
          id: 17,
          title: "MVT.UZUM DERBENDI KG",
          price: 4.05,
          img: "https://neptun.az/image/cache/catalog/MVT.UZUMDERBENDIKG-270x270.jpg?v=9",
        },
        {
          id: 18,
          title: "MVT.NAR SUPER KG",
          price: 5.71,
          img: "https://neptun.az/image/cache/catalog/th(1)-270x270.jpg?v=9",
        },
        {
          id: 19,
          title: "MVT.ARMUD KONFRANS KG",
          price: 3.25,
          img: "https://neptun.az/image/cache/catalog/A.Narmin/A.Narmin2/narminn/nrmn/untitled%20folder/narminn/Narmin/narmin/nrmnn/qovluq/narmin/MVT.ARMUDKONFRANSKG-270x270.jpg?v=9",
        },
        {
          id: 20,
          title: "MVT.NAR KG",
          price: 7.45,
          img: "https://neptun.az/image/cache/catalog/aa-270x270.jpg?v=9",
          subcategoryName: "meyve",
          categoryName: "meyve-terevez-quru-meyveler",
        },
        {
          id: 21,
          title: "MVT.LIMON TURK EDED",
          price: 0.25,
          img: "https://neptun.az/image/cache/catalog/LIOON-270x270.jpg?v=9",
          subcategoryName: "meyve",
          categoryName: "meyve-terevez-quru-meyveler",
        },
        {
          id: 22,
          title: "MVT.ALMA SEMERINKA YERLI KG",
          price: 2.65,
          img: "https://neptun.az/image/cache/catalog/b-270x270.jpg?v=9",
          subcategoryName: "meyve",
          categoryName: "meyve-terevez-quru-meyveler",
        },
        {
          id: 23,
          title: "MVT.UZUM QARA KG",
          price: 6.8,
          img: "https://neptun.az/image/cache/catalog/MVT.UZUMQARAKG-270x270.jpg?v=9",
          subcategoryName: "meyve",
          categoryName: "meyve-terevez-quru-meyveler",
        },
        {
          id: 24,
          title: "MVT.ALMA GOLDEN QIRMIZI KG",
          price: 4.65,
          img: "https://neptun.az/image/cache/catalog/Brands/44656545454-270x270.jpg?v=9",
          subcategoryName: "meyve",
          categoryName: "meyve-terevez-quru-meyveler",
        },
      ],
    },
    {
      id: 2,
      name: "Quru Meyvələr",
      image: "/img/catg2.jpg",
    },
    {
      id: 3,
      name: "NesCake",
      image: "/img/catg3.jpg",
    },
    {
      id: 4,
      name: "Yalnız Neptunda",
      image: "/img/catg4.jpg",
    },
    {
      id: 5,
      name: "Səhər Yeməkləri",
      image: "/img/catg5.jpg",
    },
  ];

  const selectedCategory = data[activeIndex];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    console.log("Selected Category:", data[selectedIndex]);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={homecatgStyle.catgDiv}>
      <BootstrapCarousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        style={{ width: "400px", display: "flex", margin: "30px 0" }}
      >
        {data.map((item) => (
          <BootstrapCarousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.name}
              style={{ width: "375px" }}
            />
            <BootstrapCarousel.Caption className={homecatgStyle.sliderText}>
              <span>Kateqoriyalar:</span>
              <p style={{ color: "#fff" }}>{item.name}</p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>

      {selectedCategory && selectedCategory.cards && (
        <Carousel
          style={{ display: "flex", flexWrap: "wrap" }}
          className="d-flex "
          responsive={responsive}
        >
          <div className="d-flex flex-row">
            {selectedCategory.cards.map((card) => (
              <div
                key={card.id}
                style={{
                  width: "200px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <div style={{ padding: "16px" }}>
                  <h5 style={{ margin: "0 0 8px" }}>{card.title}</h5>
                  <p style={{ margin: 0 }}>Price: ${card.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default HomeCatg;
