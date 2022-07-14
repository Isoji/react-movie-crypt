import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <img className="thumbnail" src={movie.Poster !== "N/A" ? movie.Poster : "https://www.movienewz.com/img/films/poster-holder.jpg"} />
            <div class="movie-overlay">
                <p id="type">{movie.Type}</p>
                <a href="#">Buy Now</a>
            </div>
        </div>
    )
}

export default MovieCard;