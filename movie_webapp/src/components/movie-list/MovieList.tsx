import { useEffect, useState } from "react";
import tmdbApi, { movieType } from "../../api/apiThemovie";
import Poster from "../poster-movie/Poster";
import "./movie-list.scss";
function MovieList(props: any) {
  const [movieList, setMovieList] = useState([]);
  const [load, setLoad] = useState(false);
  const { className, type } = props;

  useEffect(() => {
    const params = {
      page: 1,
      language: "vi-VN",
    };
    const fetchData = async () => {
      let response = null;
      switch (type) {
        case movieType.trending:
          response = await tmdbApi.getTrendingMoives({ params });
          break;
        default:
          response = await tmdbApi.getMovieList(type, { params });
      }
      setMovieList((response as any).results.slice(0, 10));
      setLoad(true);
    };
    fetchData();
    return () => {
      setLoad(false);
    };
  }, []);

  return (
    <div>
      {load ? (
        <>
          <div className={className} id={props.id}>
            {movieList.map((e: any) => (
              <div className="poster" key={e.id}>
                <Poster load={load} type={type} e={e} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="movie-loading">
          <p></p>
          <div className="skeleton-image">
            {Array(10)
              .fill(0)
              .map((item, i) => (
                <div key={i}></div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
