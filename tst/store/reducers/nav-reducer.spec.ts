import configureMockStore from "redux-mock-store";
import { cleanup } from "@testing-library/react-native";
import {
  NestedNavAction,
  NestedNavActionTypes,
} from "../../../src/store/actions/nav-action";
import { NavTabName } from "../../../src/store/states/nav/nav-state";
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("NestedNavReducer Tests", () => {
  let store;

  afterEach(cleanup);

  it("change title from LIST to HOME", async () => {
    store = mockStore({
      nestedNav: {
        title: NavTabName.LIST,
      },
    });

    expect(store.getState().nestedNav.title).toBe(NavTabName.LIST);

    const expectedAction = [
      {
        type: NestedNavActionTypes.TitleChanged,
        payload: NavTabName.HOME,
      },
    ];

    await store.dispatch(NestedNavAction.tileChanged(NavTabName.HOME));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
