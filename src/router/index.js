import MovieList from "../components/MovieList";
import MoviePage from "./pages/MoviePage";

export const routers = [
    {path: '/', element: MovieList},
    {path: '/movie', element: MoviePage}
]