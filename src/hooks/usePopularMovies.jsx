import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    
    //Fetch data from TMDB API and update store --put all data into store through dispatch.
    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    },[])
}
export default usePopularMovies;