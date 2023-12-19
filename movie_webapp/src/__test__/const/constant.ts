import configureStore from "redux-mock-store"; // Install this package if not already installed
import popular from "./popular"

export const matchMedia = (query: string) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

const mockStore = configureStore();
export const store = mockStore({
  movies: {
    loading: false,
    popular: popular,
    // trendingMovives: data,
    // filterMovies: data,
  },
  detail: {
    // movieDetail: data[0]
  },
});
