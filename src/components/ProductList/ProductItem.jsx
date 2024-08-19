import React, { useState } from "react";
import productStyle from "./product.module.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../features/redux/basketSlice";
import {
  addToWishList,
  removeWishItem,
} from "../../features/redux/wishlists/wishSlice";
import BasketModal from "../BasketModal/BasketModal";
import WishModal from "../WishModal/WishModal";

const ProductItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const [isWishListed, setIsWishListed] = useState(false);
  const [isBasketModalVisible, setIsBasketModalVisible] = useState(false);
  const [isWishModalVisible, setIsWishModalVisible] = useState(false);
  const dispatch = useDispatch();

  const addBasket = () => {
    const payload = {
      id: item.id,
      price: item.price,
      title: item.title,
      img: item.img,
      count: count,
    };
    dispatch(addToBasket(payload));
    showBasketModal();
  };

  const toggleWishHandler = () => {
    if (isWishListed) {
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
    setIsWishListed(!isWishListed);
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

  return (
    <div className={productStyle.product}>
      <div className={productStyle.img}>
        <NavLink
          to={`${item.title.toLowerCase().split(" ").join("-")}/${item.id}`}
          state={item}
        >
          <img src={item.img} alt={item.title} />
        </NavLink>
      </div>
      <div className={productStyle.prLeft}>
        <div className={productStyle.prItems}>
          <h6>{item.title}</h6>
          <p>{item.price}₼</p>
          <div className={productStyle.prdCount}>
            <button
              onClick={() => {
                setCount(count > 1 ? count - 1 : count);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className={productStyle.cart}>
            <button onClick={addBasket}>Səbətə at</button>
            <div
              style={{
                backgroundColor: isWishListed ? "white" : "transparent",
              }}
              className={productStyle.wish}
              onClick={toggleWishHandler}
            >
              {isWishListed ? <MdFavorite /> : <MdFavoriteBorder />}
            </div>
            <SlRefresh className={productStyle.colorButton} />
          </div>
        </div>
      </div>
      <BasketModal
        title={item.title}
        img={item.img}
        isVisible={isBasketModalVisible}
      />
      <WishModal
        title={item.title}
        img={item.img}
        isVisible={isWishModalVisible}
      />
    </div>
  );
};

export default ProductItem;
