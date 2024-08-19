import React from "react";
import { Link } from "react-router-dom";
import modalStyle from "./basketmodal.module.css";

const BasketModal = ({ title, img, isVisible }) => {
  return (
    <div
      className={`${modalStyle.modal} ${
        isVisible ? modalStyle.show : modalStyle.hide
      }`}
    >
      <p>Məhsul səbətə əlavə olundu!</p>
      <div className={modalStyle.modalContainer}>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <p>{title}</p>
          <p>
            məhsul<Link to="/cart"> səbətinizə </Link>əlavə edildi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
