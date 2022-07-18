import React from "react";
import "./Movie.scss";
import toast from "react-hot-toast";

const notifyProgress = () => {
  toast("Work in progess..");
};

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
          <a onClick={notifyProgress}>Buy</a>
        </div>
      </div>
    </>
  );
};

export default Movie;
