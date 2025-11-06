import { IMG_CDN_URL} from "../utils/constant";

const MovieCard = ({posterPath}) => {
    return(
        <div className="w-52 pr-6">
            <img src={IMG_CDN_URL + posterPath} alt="movie-poster" />
        </div>
    )

}
export default MovieCard;