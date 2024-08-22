import React, { useState } from "react";
import Slider from "react-slick";
import homecatgStyle from "./homecatg.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { addToBasket } from "../../features/redux/basketSlice";
import {
  addToWishList,
  removeWishItem,
} from "../../features/redux/wishlists/wishSlice";
import BasketModal from "../BasketModal/BasketModal";
import WishModal from "../WishModal/WishModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ cards }) => {
  const [counts, setCounts] = useState(Array(cards.length).fill(1));
  const [wishListed, setWishListed] = useState(Array(cards.length).fill(false));
  const [isBasketModalVisible, setIsBasketModalVisible] = useState(false);
  const [isWishModalVisible, setIsWishModalVisible] = useState(false);
  const dispatch = useDispatch();

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

  const addBasket = (item, index) => {
    const payload = {
      id: item.id,
      price: item.price,
      title: item.title,
      img: item.img,
      count: counts[index],
    };
    dispatch(addToBasket(payload));
    showBasketModal();
  };

  const toggleWishHandler = (item, index) => {
    const updatedWishListed = [...wishListed];
    if (wishListed[index]) {
      dispatch(removeWishItem(item.id));
    } else {
      const payload = {
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
      };
      dispatch(addToWishList(payload));
      showWishModal();
    }
    updatedWishListed[index] = !updatedWishListed[index];
    setWishListed(updatedWishListed);
  };

  const showBasketModal = () => {
    setIsBasketModalVisible(true);
    setTimeout(() => {
      setIsBasketModalVisible(false);
    }, 3000);
  };

  const showWishModal = () => {
    setIsWishModalVisible(true);
    setTimeout(() => {
      setIsWishModalVisible(false);
    }, 3000);
  };

  function SampleArrow(props) {
    const { className, style, onClick } = props;
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
                  <button onClick={() => addBasket(card, index)}>
                    Səbətə at
                  </button>
                  <div
                    style={{
                      backgroundColor: wishListed[index]
                        ? "white"
                        : "transparent",
                    }}
                    className={homecatgStyle.wish}
                    onClick={() => toggleWishHandler(card, index)}
                  >
                    {wishListed[index] ? <MdFavorite /> : <MdFavoriteBorder />}
                  </div>
                  <SlRefresh className={homecatgStyle.colorButton} />
                </div>
              </div>
            </div>
            <BasketModal
              title={card.title}
              img={card.img}
              isVisible={isBasketModalVisible}
            />
            <WishModal
              title={card.title}
              img={card.img}
              isVisible={isWishModalVisible}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
