import { lazy, Suspense, useEffect, useState } from "react";
import tmdbApi, { movieType, tvType } from "../../../api/apiThemovie";
import { useParams } from "react-router-dom";
import Skeleton from '../../skeleton/Skeleton'
import "./category.scss";
const MovieGrid = lazy(() => import("../../movie-grid/MovieGrid"))
function Catalog() {
  const [movies, setMovies] = useState([]);

  const { category, pageNumber } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = {
      page: pageNumber,
      language: "vi-VN",
    };
    const fetchData = async () => {
      let response = null;
      switch (category) {
        case movieType.trending:
          response = await tmdbApi.getTrendingMoives({ params });
          break;
        case "movie":
          response = await tmdbApi.getMovieList(movieType.popular, { params });
          break;
        case "tv":
          response = await tmdbApi.getTvList(tvType.popular, { params });
          break;
        default:
          response = await tmdbApi.getMovieList(category || "", { params });
      }
      setMovies((response as any).results);
    };
    fetchData();

  }, [category, pageNumber]);

  const data={
    pageNumber,
    movies,
    type:category
  }
  return (
    <div>
      <div className="catalog">
        <Suspense fallback={<Skeleton className='category'/>}>
          <MovieGrid {...data} />
        </Suspense>
      </div>
    </div>
  );
}

export default Catalog;

