import React, { useState } from "react";
import productStyle from "./product.module.css";
import { GrFavorite } from "react-icons/gr";
import { SlRefresh } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductItem = ({ item }) => {
  const [count, setCount] = useState(1);

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
      {/* <div className={productStyle.icon}>
        <FaEye />
      </div> */}
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
            <button>Səbətə at</button>
            <GrFavorite style={{ color: "#ff8300" }} />
            <SlRefresh style={{ color: "#ff8300" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
