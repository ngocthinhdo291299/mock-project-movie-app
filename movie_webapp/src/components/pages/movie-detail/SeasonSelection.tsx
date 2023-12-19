import { useRef } from "react";
import { Link } from "react-router-dom";
import ReactDom from "react-dom";
import apiConfig from "../../../api/apiConfig";
import useModal from "../../../custom-hook/useModal";
import "./season-selection-modal.scss";
function SeasonSelection({
  seasons,
  setShowSeason,
  movieId,
}: {
  seasons: any;
  setShowSeason: any;
  movieId: any;
}) {
  const overlayRef = useRef<any>();

  useModal(overlayRef, setShowSeason);
  const seasonSelection = document.getElementById("seasonSelection")
  return seasonSelection ? ReactDom.createPortal(
    <>
      <div ref={overlayRef} className="overlay" />
      <div className="modal">
        <h3 className="modal-title">Chọn phần để xem</h3>
        <ul className="season-list">
          {seasons.map((season: any) => {
            if (season.season_number > 0) {
              return (
                <li className="season-item" key={season.id}>
                  <Link to={`/watch/tv/${movieId}/${season.season_number}/1`}>
                    <div
                      className="season-poster"
                      style={{
                        backgroundImage: `url(${apiConfig.w500Image(
                          season.poster_path
                        )})`,
                      }}
                    />{" "}
                  </Link>
                  <div className="season-infor">
                    <span>
                      {" "}
                      <Link
                        to={`/watch/tv/${movieId}/${season.season_number}/1`}
                      >
                        Phần {season.season_number}(
                        {season.air_date ? (
                          season.air_date.slice(0, 4)
                        ) : (
                          <span>...</span>
                        )}
                        )
                      </Link>
                    </span>
                    <span>{season.episode_count} tập </span>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>,
    seasonSelection
  ) : null;
}

export default SeasonSelection;
