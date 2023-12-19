import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../../../api/apiConfig";
import Button from "../../../button/Button";
import AddToCartBtn from "./AddToCartBtn";

function PosterMovieDetail({
  movieDetail,
  category,
  setShowSeason,
}: {
  movieDetail: any;
  category: any;
  setShowSeason: any;
}) {
  const navigate = useNavigate();
  const handleShowChoices = () => {
    setShowSeason(true);
  };
  return (
    <>
      <img
        className="infor-left-image"
        src={apiConfig.w500Image(movieDetail.poster_path)}
        alt=""
      />
      {category === "movie" ? (
        <>
          <Button
            onClick={() => {
              navigate(`/watch/${category}/${movieDetail.id}`);
            }}
            className="btn-detail-movie"
          >
            <BsFillPlayFill className="btn-detail-movie-icon" /> XEM PHIM
          </Button>
          <AddToCartBtn movieDetail={movieDetail} />
        </>
      ) : (
        <>
          {movieDetail.seasons.length > 1 ? (
            <>
              <Button className="btn-detail-movie" onClick={handleShowChoices}>
                <BsFillPlayFill className="btn-detail-movie-icon" /> XEM PHIM
              </Button>
              <AddToCartBtn movieDetail={movieDetail} />
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  navigate(`/watch/${category}/${movieDetail.id}/1/1`);
                }}
                className="btn-detail-movie"
              >
                <BsFillPlayFill className="btn-detail-movie-icon" /> XEM PHIM
              </Button>
              <AddToCartBtn movieDetail={movieDetail} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default PosterMovieDetail;
