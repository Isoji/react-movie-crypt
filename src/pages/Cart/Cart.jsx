import React from "react";
import { useLocation } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const movie = useLocation().state.movie;

  return (
    <div className="cart">
      <div className="product__container">
        <div className="product__container__content">
          <img
            className="product__container__content__poster"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://www.movienewz.com/img/films/poster-holder.jpg"
            }
            alt="movie poster"
          ></img>
          <p>{movie.Title}</p>
        </div>
      </div>

      <div className="subtotal__container">
        <div className="subtotal__container__content">
          <p>Total: 0.01 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
