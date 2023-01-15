import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import LoadingCurcle from "./components/LoadindCurcle";
import MovieList from "./components/MovieList";
import ApiMovie from "./API/ApiMovie";
import Pagination from "./components/Pagination";

function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('star wars')
  const [isLoading, setIsLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1) // текущая страница
  const [postPerPage, setPostPerPage] = useState(5) // количество постов


  // сделать чтобы появлялась надпись "Запрос не дал результатов"
  const [error, setError] = useState(false)

  const getMovieRequest = async () => {
    setIsLoading(true)
    const data = await ApiMovie.getMovieRequest(searchValue)
    setCurrentPage(1)
    setSearchValue("")
    if (data == undefined) {
      setError(true);
    }
    else {
      console.log(data)
      setMovies(data)
      setError(false);
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue]);



  const lastPostIndex = currentPage * postPerPage; // текущая страница * количество постов = (5)
  const firstIndexPage = lastPostIndex - postPerPage; // последний индекс - количество постов = (0)
  const currentPosts = movies.slice(firstIndexPage, lastPostIndex); // деление поста


  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="appList">
        {isLoading
          ? <LoadingCurcle />
          : <MovieList movies={currentPosts} />
        }
        <Pagination
          movies={movies.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div >
  );
}

export default App;
