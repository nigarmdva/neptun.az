// src/components/HomeCatg.js

import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import homecatgStyle from "./homecatg.module.css";
import { NavLink } from "react-router-dom";
import ProductCarousel from "./ProductCarousel";

const HomeCatg = () => {
  const [count, setCount] = useState(1);
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
      ],
    },
    {
      id: 2,
      name: "Quru Meyvələr",
      image: "/img/catg2.jpg",
      cards: [
        {
          id: 1923,
          title: "CER.ARMUD QURUSU KG",
          price: 10.2,
          img: "https://neptun.az/image/cache/catalog/meyve-terevez/qurumeyveler/096889-270x270.jpg?v=9",
        },
        {
          id: 1924,
          title: "CER.PAPAYA QURUSU KG",
          price: 11.5,
          img: "https://neptun.az/image/cache/catalog/ciyelek_qurusu-270x270.jpg?v=9",
        },
        {
          id: 1925,
          title: "CER.MANQO QURUSU KG",
          price: 16.9,
          img: "https://neptun.az/image/cache/catalog/meyve-terevez/qurumeyveler/078043-270x270.jpg?v=9",
        },
      ],
    },
    {
      id: 3,
      name: "NesCake",
      image: "/img/catg3.jpg",
      cards: [
        {
          id: 752,
          title: "7 DAYS 200GR MINI KRUASAN KREM-KAKAO",
          price: 2.69,
          img: "https://neptun.az/image/cache/catalog/7DAYS200GRMINIKRUASANKREM-KAKAO-270x270.jpg?v=9",
        },
        {
          id: 754,
          title: "7 DAYS 175GR KEKS VANIL",
          price: 3.5,
          img: "https://neptun.az/image/cache/catalog/Brands/541534534534534534534354-270x270.jpg?v=9",
        },
        {
          id: 755,
          title: "7 DAYS 150GR KEKS KAKAO",
          price: 3.5,
          img: "https://neptun.az/image/cache/catalog/7days150grkeks-270x270.jpg?v=9",
        },
        {
          id: 757,
          title: "7 DAYS 200GR MINI KRUSSAN KREM-VANIL",
          price: 2.69,
          img: "https://neptun.az/image/cache/catalog/mini-kruassany-7days-vanil-18sht-105gr-270x270.jpg?v=9",
        },
      ],
    },
    {
      id: 4,
      name: "Yalnız Neptunda",
      image: "/img/catg4.jpg",
      cards: [
        {
          id: 1367,
          title: "ABC 1.5KG CAMASIR TOZU RENGLI AVTOMAT",
          price: 5.95,
          img: "https://neptun.az/image/cache/catalog/abc1-270x270.jpg?v=9",
          subcategoryName: "paltarlar-ucun",
          categoryName: "yuyucu-temizleyici-vasiteler",
        },
        {
          id: 1368,
          title: "ABC 1800GR CAMASIR TOZU LAVANDA ETIRLI ELDE",
          price: 5.6,
          img: "https://neptun.az/image/cache/catalog/abceldeyikama2-270x270.jpg?v=9",
          subcategoryName: "paltarlar-ucun",
          categoryName: "yuyucu-temizleyici-vasiteler",
        },
        {
          id: 1369,
          title: "ABC 2.5KG CAMASIR TOZU GUL ETIRLI AVTOMAT",
          price: 8.46,
          img: "https://neptun.az/image/cache/catalog/Brands/6516546546546546565156-270x270.jpg?v=9",
          subcategoryName: "paltarlar-ucun",
          categoryName: "yuyucu-temizleyici-vasiteler",
        },
        {
          id: 1370,
          title: "ABC 600GR CAMASIR TOZU LAVANDA ETIRLI",
          price: 2.65,
          img: "https://neptun.az/image/cache/catalog/abc600lavanta-270x270.jpg?v=9",
          subcategoryName: "paltarlar-ucun",
          categoryName: "yuyucu-temizleyici-vasiteler",
        },
      ],
    },
    {
      id: 5,
      name: "Səhər Yeməkləri",
      image: "/img/catg5.jpg",
      cards: [
        {
          id: 173,
          title: "CARICINO 500GR KOLBASA QOST DOKTORSKAYA",
          price: 12.89,
          img: "https://neptun.az/image/cache/catalog/A.Narmin/A.Narmin2/narminn/CARICINO500GRKOLBASAQOSTDOKTORSKAYA(2)-270x270.jpg?v=9",
          subcategoryName: "kolbasa-sosisler",
          categoryName: "qastronom",
        },
        {
          id: 174,
          title: "CARICINO 400GR VETCINA IZ INDEYKI",
          price: 9.89,
          img: "https://neptun.az/image/cache/logo-270x270.png?v=9",
          subcategoryName: "kolbasa-sosisler",
          categoryName: "qastronom",
        },
        {
          id: 175,
          title: "CARICINO 150GR DOGRANMIS BEKON B/H/V VAKUUM",
          price: 7.49,
          img: "https://neptun.az/image/cache/logo-270x270.png?v=9",
          subcategoryName: "kolbasa-sosisler",
          categoryName: "qastronom",
        },
        {
          id: 176,
          title: "CARICINO 500GR KOLBASA S NAT.MOLOKOM RUSSKAYA",
          price: 9.89,
          img: "https://neptun.az/image/cache/catalog/A.Narmin/A.Narmin2/narminn/CARICINO500GRKOLBASAQOSTRUSSKAYA-270x270.jpg?v=9",
          subcategoryName: "kolbasa-sosisler",
          categoryName: "qastronom",
        },
      ],
    },
  ];

  const selectedCategory = data[activeIndex];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    console.log("Selected Category:", data[selectedIndex]);
  };

  const handleDropdownChange = (event) => {
    const selectedIndex = parseInt(event.target.value, 10);
    if (!isNaN(selectedIndex)) {
      setActiveIndex(selectedIndex);
    }
  };
  return (
    <div>
      <div className={homecatgStyle.catgDiv}>
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          className={homecatgStyle.homeCarousel}
        >
          {data.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className={homecatgStyle.homeCarouselItem}
                src={item.image}
                alt={item.name}
              />
              <Carousel.Caption className={homecatgStyle.sliderText}>
                <span>Kateqoriyalar:</span>
                <p>{item.name}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {selectedCategory && selectedCategory.cards && (
          <ProductCarousel
            cards={selectedCategory.cards}
            count={count}
            setCount={setCount}
          />
        )}
      </div>
    </div>
  );
};

export default HomeCatg;
