import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import oneStyle from "./oneproduct.module.css";
import { FaChevronRight, FaRegStar, FaStar } from "react-icons/fa";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../features/redux/basketSlice";
import {
  addToWishList,
  removeWishItem,
} from "../../features/redux/wishlists/wishSlice";
import BasketModal from "../BasketModal/BasketModal";
import WishModal from "../WishModal/WishModal";

const OneProduct = () => {
  const { category, subCategory, id } = useParams();
  const location = useLocation();
  const item = location.state;
  const [count, setCount] = useState(1);
  const [rating, setRating] = useState(0);
  const [commentRating, setCommentRating] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isWishListed, setIsWishListed] = useState(false);
  const [isBasketModalVisible, setIsBasketModalVisible] = useState(false);
  const [isWishModalVisible, setIsWishModalVisible] = useState(false);
  const dispatch = useDispatch();

  if (!item) {
    return <p>Product details not available</p>;
  }

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleCommentStarClick = (value) => {
    setCommentRating(value);
  };

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
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div className={oneStyle.container}>
        <div className={oneStyle.listText}>
          <Link to={"/"}>Ana Səhifə</Link>
          <FaChevronRight className={oneStyle.textRight} />
          <Link to={"/"}>{category.split("-").join(" ")}</Link>
          <FaChevronRight className={oneStyle.textRight} />
          <Link to={"/"}>{subCategory}</Link>
          <FaChevronRight className={oneStyle.textRight} />
          <Link to={"/"}>{item.title}</Link>
        </div>
        <div className={oneStyle.prItems}>
          <div className={oneStyle.left}>
            <div className={oneStyle.img}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={oneStyle.imgs}>
              <img src={item.img} alt={item.title} />
              <img src={item.img} alt={item.title} />
            </div>
          </div>
          <div className={oneStyle.right}>
            <h6>{item.title}</h6>
            <div className={oneStyle.stars}>
              {[...Array(5)].map((_, index) => (
                <span key={index} onClick={() => handleStarClick(index + 1)}>
                  {rating > index ? <FaStar /> : <FaRegStar />}
                </span>
              ))}
            </div>
            <div className={oneStyle.comments}>
              <span>0 Şərh | Şərh yaz</span>
            </div>
            <div className={oneStyle.info}>
              <div>
                <p>Model</p>
                <p>Mövcudluq</p>
              </div>
              <div>
                <p>{item.id}</p>
                <p>
                  <input type="checkbox" checked="checked" readOnly />
                </p>
              </div>
            </div>
            <p className={oneStyle.price}>{item.price}₼</p>
            <div className={oneStyle.prdCount}>
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
            <div className={oneStyle.cart}>
              <button onClick={addBasket}>Səbətə at</button>
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={toggleWishHandler}
                className={oneStyle.setHovered}
              >
                {isWishListed ? (
                  <MdFavorite className={oneStyle.transition} />
                ) : (
                  <MdFavoriteBorder className={oneStyle.transition} />
                )}
              </div>
              <SlRefresh className={oneStyle.colorButton} />
            </div>
          </div>
        </div>
        <div className={oneStyle.rate}>
          <p className={oneStyle.colorButton}>Şərhlər (0)</p>
          <span className={oneStyle.itemSpan}>
            Bu məhsul üçün şərh yazılmayıb
          </span>
          <p className={oneStyle.itemP}>Şərh yaz</p>
          <input type="text" name="name" placeholder="Adınız" />
          <textarea name="comment" placeholder="Şərh" rows={15}></textarea>
          <div className={oneStyle.stars}>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleCommentStarClick(index + 1)}
              >
                {commentRating > index ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
          </div>
          <button>Davam et</button>
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

export default OneProduct;
