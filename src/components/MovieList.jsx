import React, { useEffect, useRef, useState } from "react";
import { getMovieRequest } from "../API/ApiMovie";
import {useNavigate} from 'react-router-dom';
import '../components_style/style.css';

const MovieList = ({setIdMovie, searchValue}) => {
    const [dataFilms, setDataFilms] = useState([]);
    const [dataSerials, setDataSerials] = useState([]);

    const ref = useRef(null);
    const refSerial = useRef(null);
    const navigate = useNavigate();

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const scrollSer = (scrollOffset) => {
        refSerial.current.scrollLeft += scrollOffset;
    };

    const navigateToPageMovie = (title) => {
        setIdMovie(title);
        navigate(`/movie/:${title}`);
    } 

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await getMovieRequest(searchValue ? searchValue : 'star');
            const data = await response;
            setDataFilms(data);
        }
        const fetchSerials = async () => {
            const response = await getMovieRequest("game");
            const data = await response;
            setDataSerials(data);
        }
        fetchMovie();
        fetchSerials();
    }, [searchValue, setIdMovie])

    return (
        <div className="postMovie wrapper">
            <h2>Топ фильмов:</h2>
            <div className="postMovie_buttons">
                <button
                    onClick={() => scroll(-150)}
                >Left</button>
                <button onClick={() => scroll(150)}>Right</button>
            </div>
            <div className="movies" ref={ref}>
                {
                    dataFilms && dataFilms.map((movie) =>
                        <div key={movie.imdbID} className="postInfo" onClick={()=>navigateToPageMovie(movie.Title)}>
                            <img src={movie.Poster} alt="постер"></img>
                            <p>{movie.Title}</p>
                        </div>
                    )
                }
            </div>
            <h2>Топ сериалов:</h2>
            <div className="postMovie_buttons">
                <button
                    onClick={() => scrollSer(-150)}
                >Left</button>
                <button onClick={() => scrollSer(150)}>Right</button>
            </div>
            <div className="movies" ref={refSerial}>
                {
                   dataSerials && dataSerials.map((movie) =>
                   <div key={movie.imdbID} className="postInfo" onClick={()=>navigateToPageMovie(movie.Title)}>
                       <img src={movie.Poster} alt="постер" ></img>
                       <p>{movie.Title}</p>
                   </div>
               )
                }
            </div>
        </div>
    )
}

export default MovieList;