import React from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import "./Cart.scss";

const notify = () =>
  toast("Work in progress..", { style: { background: "#ba9511" } });

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
          <div className="product__container__content__details">
            <p>{movie.Title}</p>
            <p>({movie.Year})</p>
          </div>
        </div>
      </div>

      <div className="subtotal__container">
        <div className="subtotal__container__content">
          <p className="subtotal__container__content__total">
            <span id="total-label">Total: </span>
            <span id="total-price">0.01 ETH</span>
          </p>
          <button
            className="subtotal__container__content__buy-button"
            onClick={notify}
          >
            Buy Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
