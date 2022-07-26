import React from "react";
import { Link } from "react-router-dom";
import "./Movie.scss";

const Movie = ({ movie }) => {
  return (
    <>
      <div className="moviecard">
        <img
          className="moviecard__image"
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
              : "https://www.movienewz.com/img/films/poster-holder.jpg"
          }
          alt="movie poster"
        ></img>
        <div className="moviecard__overlay">
          <p>{movie.original_title}</p>
          <Link to="/cart" state={{ movie: movie }}>
            Buy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Movie;
