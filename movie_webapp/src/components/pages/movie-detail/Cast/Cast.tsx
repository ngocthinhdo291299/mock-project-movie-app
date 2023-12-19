import apiConfig from "../../../../api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./cast.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";
import { useEffect } from "react";
export const Cast = ({ movieCredits }: { movieCredits: any }) => {
  useEffect(() => {
    console.log(movieCredits);
  }, []);
  return (
    <div className="cast">
      <h3 className="cast-title">DIỄN VIÊN</h3>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        // loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          500: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 5,
          },

          1200: {
            slidesPerView: 6,
          },
        }}
        className="mySwiper"
      >
        {movieCredits.map((cast: any) => {
          if (cast.profile_path) {
            return (
              <SwiperSlide key={cast.id}>
                <div className="cast-profile">
                  <img
                    className="cast-image"
                    src={apiConfig.w500Image(cast.profile_path)}
                    alt=""
                  />
                  <span className="cast-name">{cast.name}</span>
                  <span className="cast-name-character">{cast.character}</span>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};
