import { memo, useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaPlayCircle } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { movieType } from "../../api/apiThemovie";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../slices/cartSlice";
import "./poster.scss";
function Poster(props: any) {
  const dispatch = useDispatch();
  let { type, e, className, rank } = props;
  const [opacity, setOpaicty] = useState(0.2);
  const { upcoming, latest, top_rated, trending, popular } = movieType;
  let category = null;
  const handleRemove = () => {
    dispatch(removeMovie(e.id));
  };
  switch (type) {
    case upcoming:
    case latest:
    case top_rated:
    case trending:
    case popular:
    case "movie":
      category = "movie";
      break;
    default:
      category = "tv";
  }

  useEffect(() => {
    setTimeout(() => {
      setOpaicty(1);
    }, 50);
  }, []);

  const checkClassName = className === "home-sidebar";
  return (
    <div className="poster-cart">
      <Link
        className="poster-link"
        to={`/${e.media_type || category || "movie"}/${e.id}`}
      >
        <div className={`image-container  ${className}`}>
          <div
            className={`poster-image ${className}`}
            style={{
              backgroundImage: `url(${apiConfig.w500Image(e.poster_path)})`,
              opacity: opacity,
            }}
          ></div>
          <div className="image-overlay">
            <FaPlayCircle />
          </div>
          {checkClassName && (
            <span className="rank">
              <span className="rank-number">{rank}</span>
            </span>
          )}
          {checkClassName && (
            <p className="sidebar-title">
              {e.title || e.name}({e.release_date && e.release_date.slice(0, 4)}
              {e.first_air_date && e.first_air_date.slice(0, 4)})
            </p>
          )}
          {checkClassName && (
            <div className="sidebar-title-english">
              {e.original_title || e.original_name}
            </div>
          )}
          {!checkClassName && (
            <span className="vote">
              <TiStarFullOutline className="star" />
              <span className="score">{e.vote_average}</span>
            </span>
          )}
        </div>
        {!checkClassName && (
          <p className="poster-title-vietnamese">{e.title || e.name}</p>
        )}
        {!checkClassName && (
          <div className="poster-title-english">
            {e.original_title || e.original_name}
          </div>
        )}
      </Link>
      {type === "cart" ? (
        <div className="remove" onClick={() => handleRemove()}>
          <BsFillTrashFill className="trash" /> 
        </div>
      ) : null}
    </div>
  );
}

export default memo(Poster);
