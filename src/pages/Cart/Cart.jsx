import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <div className="cart-container">
      <h2>{movie.Title}</h2>
      <h3>{movie.Year}</h3>
    </div>
  );
};

export default Cart;
