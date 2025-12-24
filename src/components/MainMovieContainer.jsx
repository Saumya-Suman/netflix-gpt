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
    <div className="relative h-screen text-white">
      <VideoBackground movie_id={id} />
      <div className="absolute inset-0 flex flex-col justify-center px-16 bg-gradient-to-r from-black/70 to-transparent">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};
export default MainMovieContainer;
