import { useEffect, useState } from "react";
import tmdbApi from "../../api/apiThemovie";
import "./trailer.scss";
function Trailer(props: any) {
  const { category, id } = props;
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const params = {};
    const fetchData = async () => {
      const response = await tmdbApi.getVideos(category, id, { params });
      setTrailer((response as any).results.splice(0, 2));
    };
    fetchData();
  }, []);
  return (
    <div className="trailer-list">
      {trailer.map((e: any) => (
        <div className="trailer-item" key={e.id}>
          <iframe
            className="trailer-iframe"
            src={`https://www.youtube.com/embed/${e.key}`}
            title="trailer"
          />
        </div>
      ))}
    </div>
  );
}

export default Trailer;
