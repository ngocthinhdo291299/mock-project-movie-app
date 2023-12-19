import { all } from "redux-saga/effects";
import { watchHeroAsync } from "./heroSaga"; 

export default function* rootSaga() {
  yield all([
    watchHeroAsync(),
  ]);
}
