import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getMovie } from "../API/ApiMovie";
import '../components_style/style.css';

const MoviePage = ({ title }) => {

    const [film, setFilms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await getMovie(title);
            const data = await response;
            console.log(data);
            setFilms(data);
        }
        fetchMovie();
    }, [title])


    return (
        <div className="wrapper moviePage">
            <button onClick={() => navigate('/')} className="button_nav">Назад</button>
            {film &&
                <div key={film.imdbID} className="filmInfo">
                    <div className="filmInfo_poster">
                        <h2>{film.Title}</h2>
                        <img src={film.Poster} alt="poster" />
                        <button className="button_watch">Смотреть</button>
                    </div>
                    <div className="filmInfo_info">
                        <p>
                            Краткое описание: {film.Plot} <br />
                        </p>
                        <p>
                            Актеры: {film.Actors} <br />
                        </p>
                        <p>
                            Награды: {film.Awards} <br />
                        </p>
                        <p>
                            Страна: {film.Country} <br />
                        </p>
                        <p>
                            Язык: {film.Language} <br />
                        </p>
                        <p>
                            Релиз: {film.Released} <br />
                        </p>
                        <p>
                            Рейтинг: {film.imdbRating} <br />
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default MoviePage;