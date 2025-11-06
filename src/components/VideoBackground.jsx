
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

//get movie_id from mainMovieContainer through props.
const VideoBackground = ({ movie_id }) => {

  //getting trailer video from store using useSelector hook.
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //calling my custom hook useMovieTrailer and passing movie_id as argument.
  //why doing this because I want to fetch trailer video of that particular movie only.
  useMovieTrailer(movie_id);


  return (
    <div className="w-screen z-0 -mt-32">
      <iframe
      className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
