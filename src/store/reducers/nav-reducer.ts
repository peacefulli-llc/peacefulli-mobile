import { Reducer } from "redux";
import { NestedNavActionTypes } from "../actions/nav-action";
import { INestedNavState } from "../states/nav/nav-state";

const initialState: INestedNavState = {
  title: null,
};

export const NestedNavReducer: Reducer<INestedNavState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case NestedNavActionTypes.TitleChanged: {
      var newTitle = action.payload as string;
      return {
        ...state,
        title: newTitle,
      };
    }
    default:
      return state;
  }
};
