import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <img className="thumbnail" src={movie.Poster} />
            <div class="movie-overlay">
                <p id="type">{movie.Type}</p>
                <a href="#">Rent Now</a>
            </div>
        </div>
    )
}

export default MovieCard;