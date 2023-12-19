import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Skeleton from "../skeleton/Skeleton";
import MovieSlide from "./MovieSlide";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.scss";

function Hero() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moviesHeroSlide = useSelector((state: any) => state.hero.heroData);
  useEffect(() => {
    dispatch({ type: "GET_HERO_DATA" });
    setLoad(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <>
      {load ? (
        <div className="hero">
          <section className="hero-slide">
            <Slider {...settings}>
              {moviesHeroSlide.map((e: any) => (
                <MovieSlide navigate={navigate} key={e.id} e={e} />
              ))}
            </Slider>
          </section>
        </div>
      ) : (
        <Skeleton className="loading-hero" />
      )}
    </>
  );
}

export default memo(Hero);
