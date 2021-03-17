import { combineReducers } from "redux";
import { RootState } from "../states/root-state";
import { NestedNavReducer } from "./nav-reducer";

export const rootReducer = combineReducers<RootState>(getRootStateReducers());

function getRootStateReducers(): any {
  return {
    nestedNav: NestedNavReducer,
  };
}
