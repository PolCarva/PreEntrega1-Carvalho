import React from "react";
import cart from "../../assets/images/cart.svg";
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cart} alt="Carrito de compras" />
      <span className="cart-amount">3</span>
    </div>
  );
};

export default CartWidget;
