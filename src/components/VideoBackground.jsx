
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
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <iframe
      className="w-full h-full object-cover"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
