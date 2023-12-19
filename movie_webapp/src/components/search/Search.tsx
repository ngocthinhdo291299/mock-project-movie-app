import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "./search.scss";
function Search() {
  const [input, setInput] = useState<any>("");
  const { keyword } = useParams();
  const navigate = useNavigate();

  const handleSearch = (value: any) => {
    navigate(`/search/${value}`);
    setInput(value);
  };
  useEffect(() => {
    setInput(keyword);
    return () => {
      setInput("");
    };
  }, [keyword]);

  return (
    <div className="search-page">
      <div className="container">
        <div className="main-search">
          <input
            value={input}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            placeholder="Search..."
            className="main-search-input"
          />
        </div>
        <div className="main-movies">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Search;
