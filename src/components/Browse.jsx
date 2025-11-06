import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {

  //This hook is fetching now playing movies from TMDB API and updating store.
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return <div>
    <MainMovieContainer />
    <SecondaryMovieContainer />
    </div>;
};
export default Browse;
