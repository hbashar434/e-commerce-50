import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  //   const { cart } = props;

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity == 0) {
    //   product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;

    total += product.price * product.quantity;
    shipping += product.shipping * product.quantity;
    quantity += product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary </h4>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : ${total.toFixed(2)}</p>
      <p>Total Shipping : ${shipping.toFixed(2)}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
      </button>
      {children}
    </div>
  );
};

export default Cart;
