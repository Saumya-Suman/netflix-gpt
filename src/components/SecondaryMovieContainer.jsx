import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryMovieContainer = () => {
    
  //fETCH MOVIE DATA FROM STORE through useselector hook.
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-65 pl-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};
export default SecondaryMovieContainer;
