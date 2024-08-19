import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import cartpageStyle from "./cartpage.module.css";
import { FaChevronRight } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";

import {
  removeFromBasket,
  updateBasket,
} from "../../features/redux/basketSlice";

export const CartPage = () => {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isKuponVisible, setIsKuponVisible] = useState(false);
  const handleRemoveClick = (id) => {
    dispatch(removeFromBasket(id));
  };

  const toggleKuponVisibility = () => {
    setIsKuponVisible(!isKuponVisible);
  };

  const totalAmount = products.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <div className={cartpageStyle.cartPage}>
      <div className={cartpageStyle.container}>
        <div className={cartpageStyle.listText}>
          <Link to={"/"}>Ana Səhifə</Link>
          <FaChevronRight className={cartpageStyle.rightIcon} />
          <Link to={"/cart"}>Səbət</Link>
        </div>

        {products.length === 0 ? (
          <div className={cartpageStyle.noItems}>
            <h2>Səbət</h2>
            <h6>Sizin səbətiniz boşdur</h6>
            <Link to="/">Davam et</Link>
            <Link to="/contact">Əlaqə</Link>
          </div>
        ) : (
          <div className={cartpageStyle.cartPageItems}>
            <h2>Səbət</h2>
            <div className={cartpageStyle.tableContainer}>
              <table className={cartpageStyle.cartTable}>
                <thead>
                  <tr>
                    <th>Şəkil</th>
                    <th>Məhsulun adı</th>
                    <th>Model</th>
                    <th>Sayı</th>
                    <th>Qiyməti</th>
                    <th>Məbləğ</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => {
                    const totalPrice = (item.price * item.count).toFixed(2);

                    return (
                      <tr key={item.id}>
                        <td>
                          <img src={item.img} alt={item.title} />
                        </td>
                        <td>
                          <b>{item.title}</b>
                        </td>
                        <td>{item.id}</td>
                        <td>
                          <div className={cartpageStyle.cartButtons}>
                            <input
                              type="text"
                              id={`${item.id}`}
                              defaultValue={item.count}
                              onChange={(e) => setValue(e.target.value)}
                            />
                            <button
                              className={cartpageStyle.refresh}
                              onClick={() => {
                                dispatch(
                                  updateBasket({ id: item.id, count: value })
                                );
                              }}
                            >
                              <SlRefresh />
                            </button>
                            <button
                              className={cartpageStyle.remove}
                              onClick={() => handleRemoveClick(item.id)}
                            >
                              <CiCircleRemove />
                            </button>
                          </div>
                        </td>
                        <td>{item.price} AZN</td>
                        <td>{totalPrice} AZN</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h2>Daha nə etmək istəyirsiniz?</h2>
            <div className={cartpageStyle.kuponDiv}>
              <div
                className={cartpageStyle.cartKupon}
                onClick={toggleKuponVisibility}
              >
                <span>Kupon istifadə etmək</span>
                <FaCaretDown />
              </div>
              <div
                className={`${cartpageStyle.kuponInputDiv} ${
                  isKuponVisible ? cartpageStyle.show : ""
                }`}
              >
                <div className={cartpageStyle.spanKupon}>
                  <span>Kupon kodu daxil edin</span>
                </div>
                <input type="text" placeholder="Kupon daxil edin" />
                <button>Kuponu işlət</button>
              </div>
            </div>
            <div className={cartpageStyle.totalCartPrice}>
              <table>
                <tbody>
                  <tr>
                    <td className={cartpageStyle.boldText}>Məbləğ</td>
                    <td>{totalAmount.toFixed(2)} AZN</td>
                  </tr>
                  <tr>
                    <td className={cartpageStyle.boldText}>Ümumi məbləğ:</td>
                    <td>{totalAmount.toFixed(2)} AZN</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <Link>Sifarişi rəsmiləşdir</Link>
              </div>
            </div>
            <div className={cartpageStyle.backShop}>
              <Link to="/">Alış-verişə davam</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
