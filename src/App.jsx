import React from "react";
import {Routes, Route} from 'react-router-dom';
import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import NotFound from './pages/NotFound';
import MoviePage from "./pages/MoviePage";
import Footer from "./components/Footer";
import './App.css';

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [idMovie, setIdMovie] = useState();

  return (

    <>
    <div className="App">
    <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path='/' element={<MovieList setIdMovie={setIdMovie} searchValue={searchValue}/>}/>
        <Route path='/movie/:id' element={<MoviePage title={idMovie}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
