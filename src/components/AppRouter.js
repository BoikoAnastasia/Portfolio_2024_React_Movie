import React, { Component } from "react";
import MovieList from "./MovieList.js";
import MoviePage from "./pages/MoviePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Router() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={MovieList} />
                <Route path="/movie" exact component={MoviePage} />
            </div>
        </Router>
    )
}
export default Router;