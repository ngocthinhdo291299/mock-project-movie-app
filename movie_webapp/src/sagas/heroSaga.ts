import { put, takeEvery, call } from "redux-saga/effects";
import {
  fetchDataHeroSuccess,
  fetchDataHeroFailure,
} from "../slices/heroSlice";
import tmdbApi, { movieType } from "../api/apiThemovie";
import { AxiosResponse } from "axios";

function* fetchHeroSaga() {
  try {
    const params = {
      page: 1,
      language: "vi-VN",
    };
    const response: AxiosResponse = yield call(
      tmdbApi.getMovieList,
      movieType.popular,
      {
        params,
      }
    ) as any;
    yield put(fetchDataHeroSuccess(response as any));
  } catch (error: any) {
    yield put(fetchDataHeroFailure(error));
  }
}

export function* watchHeroAsync() {
  yield takeEvery("GET_HERO_DATA", fetchHeroSaga);
}
