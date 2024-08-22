import React, { useState } from "react";
import wishStyle from "./wishlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronRight } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";
import { addToBasket } from "../../features/redux/basketSlice";
import { Link } from "react-router-dom";
import AccDiv from "../AccDiv/AccDiv";
import { removeWishItem } from "../../features/redux/wishlists/wishSlice";
import BasketModal from "../BasketModal/BasketModal";

const WishList = (item) => {
  const [isBasketModalVisible, setIsBasketModalVisible] = useState(false);
  const wishListItems = useSelector((state) => state.wishLists.wishListItems);
  const dispatch = useDispatch();

  const handleRemoveWishClick = (id) => {
    dispatch(removeWishItem(id));
  };

  const addBasket = (item) => {
    const payload = {
      id: item.id,
      price: item.price,
      title: item.title,
      img: item.img,
      count: 1,
    };
    dispatch(addToBasket(payload));
    showBasketModal();
  };
  const showBasketModal = () => {
    setIsBasketModalVisible(true);
    setTimeout(() => {
      setIsBasketModalVisible(false);
    }, 3000);
  };

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
      }}
    >
      <div className={wishStyle.container}>
        <div className={wishStyle.listText}>
          <Link to={"/"}>Ana Səhifə</Link>
          <FaChevronRight className={wishStyle.rightIcon} />
          <Link to={"/cart"}>Arzu siyahısı</Link>
        </div>
        <div className={wishStyle.wishStructure}>
          <div className={wishStyle.wishDiv}>
            <h3>Arzu siyahısı</h3>
            <div>
              {wishListItems.length === 0 ? (
                <div className={wishStyle.itemsDiv}>
                  <h2>Arzu siyahısı boşdur</h2>
                </div>
              ) : (
                <div>
                  <div className={wishStyle.tableContainer}>
                    <table>
                      <thead>
                        <tr>
                          <th>Şəkil</th>
                          <th>Məhsulun adı</th>
                          <th>Model</th>
                          <th>Anbar</th>
                          <th>Qiyməti</th>
                          <th>Hərəkət</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishListItems.map((item) => {
                          const totalPrice = (item.price * item.count).toFixed(
                            2
                          );

                          return (
                            <tr key={item.id}>
                              <td>
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  className={wishStyle.wishImg}
                                />
                              </td>
                              <td className={wishStyle.title}>
                                <b>{item.title}</b>
                              </td>
                              <td>{item.id}</td>
                              <td>Anbarda</td>
                              <td className={wishStyle.wishPrice}>
                                {item.price} AZN
                              </td>
                              <td className={wishStyle.wishButtons}>
                                <button
                                  className={wishStyle.shopping}
                                  onClick={() => addBasket(item)}
                                >
                                  <FaCartShopping />
                                </button>
                                <button
                                  className={wishStyle.remove}
                                  onClick={() => handleRemoveWishClick(item.id)}
                                >
                                  <CiCircleRemove />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <button className={wishStyle.continue}>Davam et</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <AccDiv />
        </div>
      </div>
      <BasketModal
        title={item.title}
        img={item.img}
        isVisible={isBasketModalVisible}
      />
    </div>
  );
};

export default WishList;
