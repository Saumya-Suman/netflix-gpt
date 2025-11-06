import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainMovieContainer = () => {
  //getting movie data from store or moviesSlice through useSelector hook
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //If no movie in the store I don't want to load my main Container.
  if (!movies) return;

  //The 1st movie I have in the list will be my main Movie. Also, If there is a movie I want to load 1st movie

  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pb-15">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id={id} />
    </div>
  );
};
export default MainMovieContainer;
