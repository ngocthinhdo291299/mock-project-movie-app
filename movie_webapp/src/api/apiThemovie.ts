import instance from "./axiosConfig";
export const category: any = {
  movie: "movie",
  tv: "tv",
};
export const movieType: any = {
  latest: "latest",
  now_playing: "now_playing",
  popular: "popular",
  top_rated: "top_rated",
  upcoming: "upcoming",
  trending: "trending",
};
export const tvType: any = {
  popular: "popular",
  top_rated: "top_rated",
  on__the_air: "on_the_air",
};
const tmdbApi = {
  getTrendingMoives: (params: any) => {
    const url = "trending/all/day";
    return instance.get(url, params);
  },
  getMovieDiscover: (params: any) => {
    const url = `discover/movie`;
    return instance.get(url, params);
  },
  getMovieList: (type: string, params: any) => {
    const url = "movie/" + movieType[type];
    return instance.get(url, params);
  },
  getTvList: (type: string, params: any) => {
    const url = "tv/" + tvType[type];
    return instance.get(url, params);
  },
  getVideos: (cate: string, id: string, params: any) => {
    const url = category[cate] + "/" + id + "/videos";
    return instance.get(url, params);
  },
  search: (params: any) => {
    // const url='search/' + category[cate]
    const url = "search/multi";
    return instance.get(url, params);
  },
  getMovieDetail: (cate: string, id: string, params: any) => {
    const url = category[cate] + "/" + id;
    return instance.get(url, params);
  },
  getMovieCredits: (cate: string, id: string, params: any) => {
    const url = category[cate] + "/" + id + "/credits";
    return instance.get(url, params);
  },
  getMovieSimilar: (cate: string, id: string, params: any) => {
    const url = category[cate] + "/" + id + "/similar";
    return instance.get(url, params);
  },
  getTranslations: (cate: string, id: string, params: any) => {
    const url = category[cate] + "/" + id + "/translations";
    return instance.get(url, params);
  },
};

export default tmdbApi;
