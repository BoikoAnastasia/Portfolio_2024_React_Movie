import React from "react";
import style from '../components_style/style.css';

const MovieList = (props) => {
    return (
        <div className="postMovie">
            {props.movies.map((movie, index) =>
                <div key={index} className="postInfo">
                    <img src={movie.Poster} alt="постер" ></img>
                    <p>{movie.Title}</p>
                </div>)}
        </div>
    )
}

export default MovieList;