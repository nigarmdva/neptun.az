import React from "react";
import "./cartmodal.css";

const CartModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={closeModal}>Close</button>
        <h2>Your Shopping Cart</h2>
        <p>Items in your cart will be displayed here.</p>
      </div>
    </div>
  );
};

export default CartModal;
