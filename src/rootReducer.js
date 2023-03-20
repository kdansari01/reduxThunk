import { combineReducers } from "redux";
import { AddReducer } from "./reducer";

export const RootReducer = combineReducers({
  data: AddReducer
});
