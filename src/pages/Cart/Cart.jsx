import React from "react";
import { useLocation } from "react-router-dom";
import "./Cart.scss";
import Buy from "../../components/Buy/Buy";

const Cart = () => {
  const movie = useLocation().state.movie;

  return (
    <div className="cart">
      <div className="product__container">
        <div className="product__container__content">
          <img
            className="product__container__content__poster"
            src={
              movie.poster_path !== null
                ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                : "https://www.movienewz.com/img/films/poster-holder.jpg"
            }
            alt="movie poster"
          ></img>
          <div className="product__container__content__details">
            <p id="movie-title">{movie.original_title}</p>
            <p>{movie.vote_average}/10</p>
            <p id="movie-release-date">Release Date: {movie.release_date}</p>
            <p id="movie-overview">{movie.overview}</p>
          </div>
        </div>
      </div>

      <div className="subtotal__container">
        <div className="subtotal__container__content">
          <p className="subtotal__container__content__total">
            <span id="total-label">Total: </span>
            <span id="total-price">0.01 ETH</span>
          </p>
          <Buy />
        </div>
      </div>
    </div>
  );
};

export default Cart;
