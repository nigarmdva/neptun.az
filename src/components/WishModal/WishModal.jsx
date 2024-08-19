import React from "react";
import { Link } from "react-router-dom";
import modalStyle from "./wishmodal.module.css";

const WishModal = ({ title, img, isVisible }) => {
  return (
    <div
      className={`${modalStyle.modal} ${
        isVisible ? modalStyle.show : modalStyle.hide
      }`}
    >
      <p>Məhsul arzu siyahısına əlavə olundu!</p>
      <div className={modalStyle.modalDiv}>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <p>{title}</p>
          <p>
            məhsul <Link to="/wish-list">arzu siyahınıza</Link> əlavə edildi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishModal;
