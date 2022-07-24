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
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://www.movienewz.com/img/films/poster-holder.jpg"
          }
          alt="movie-poster"
        ></img>
        <div className="moviecard__overlay">
          <p>{movie.Title}</p>
          <Link to="/cart">Buy</Link>
        </div>
      </div>
    </>
  );
};

export default Movie;
