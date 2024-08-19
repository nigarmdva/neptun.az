import React, { useState } from "react";
import Slider from "react-slick";
import homecatgStyle from "./homecatg.module.css";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ cards }) => {
  const [counts, setCounts] = useState(Array(cards.length).fill(1));

  function SampleArrow(props) {
    const { className, style, onClick, direction } = props;
    const arrowStyle = {
      ...style,
      width: "50px",
      height: "50px",
      fontSize: "100px",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      display: "block",
      backgroundColor: "#f2f2f27d",
      borderRadius: "100%",
    };

    return <div className={className} style={arrowStyle} onClick={onClick} />;
  }
  function SampleArrow(props) {
    const { className, style, onClick, direction } = props;
    const arrowStyle = {
      ...style,
      width: "50px",
      height: "50px",
      fontSize: "100px !important",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      display: "block",
      backgroundColor: "#f2f2f27d",
      borderRadius: "100%",
    };

    return <div className={className} style={arrowStyle} onClick={onClick} />;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] = Math.max(1, newCounts[index] - 1);
    setCounts(newCounts);
  };

  return (
    <div className={homecatgStyle.prCarousel}>
      <Slider {...settings} className={homecatgStyle.catgCarousel}>
        {cards.map((card, index) => (
          <div key={card.id} className={homecatgStyle.product}>
            <div className={homecatgStyle.img}>
              <NavLink
                to={`${card.title.toLowerCase().split(" ").join("-")}/${
                  card.id
                }`}
                state={card}
              >
                <img src={card.img} alt={card.title} />
              </NavLink>
            </div>
            <div className={homecatgStyle.prLeft}>
              <div className={homecatgStyle.prItems}>
                <h6>{card.title}</h6>
                <p>{card.price}₼</p>
                <div className={homecatgStyle.prdCount}>
                  <button onClick={() => handleDecrement(index)}>-</button>
                  <span>{counts[index]}</span>
                  <button onClick={() => handleIncrement(index)}>+</button>
                </div>
                <div className={homecatgStyle.cart}>
                  <button>Səbətə at</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
