import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import oneStyle from "./oneproduct.module.css";
import { FaChevronRight, FaRegStar, FaStar } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { SlRefresh } from "react-icons/sl";

const OneProduct = () => {
  const { category, subCategory, id } = useParams();
  const location = useLocation();
  const item = location.state;
  const [count, setCount] = useState(1);
  const [rating, setRating] = useState(0);
  const [commentRating, setCommentRating] = useState(0);

  if (!item) {
    return <p>Product details not available</p>;
  }
  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleCommentStarClick = (value) => {
    setCommentRating(value);
  };

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div className={oneStyle.container}>
        <div className={oneStyle.listText}>
          <Link to={"/"}>Ana Səhifə</Link>
          <FaChevronRight style={{ color: "6c6c6c", fontSize: ".8em" }} />
          <Link to={"/"}>{category.split("-").join(" ")}</Link>
          <FaChevronRight style={{ color: "6c6c6c", fontSize: ".8em" }} />
          <Link to={"/"}>{subCategory}</Link>
          <FaChevronRight style={{ color: "6c6c6c", fontSize: ".8em" }} />
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
              <button>Səbətə at</button>
              <GrFavorite style={{ color: "#ff8300" }} />
              <SlRefresh style={{ color: "#ff8300" }} />
            </div>
          </div>
        </div>
        <div className={oneStyle.rate}>
          <p style={{ color: "#ff8300" }}>Şərhlər (0)</p>
          <span style={{ font: "400 .7em sans-serif" }}>
            Bu məhsul üçün şərh yazılmayıb
          </span>
          <p style={{ fontWeight: "700", margin: "10px 0" }}>Şərh yaz</p>
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
    </div>
  );
};

export default OneProduct;
