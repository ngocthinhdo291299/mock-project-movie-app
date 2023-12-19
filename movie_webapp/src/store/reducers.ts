import { combineReducers } from "redux";
import cartSlice from "../slices/cartSlice";
import heroSlice from "../slices/heroSlice";
const rootReducer = combineReducers({
  cart: cartSlice,
  hero: heroSlice
});

export default rootReducer;
