import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react-native";
import { NestedNav } from "../../../../src/components/navigation/nested-nav/nested-nav";
import { TabInfo } from "../../../../src/components/navigation/bottom-tab-nav/tab-details";

jest.useFakeTimers();

console.warn = () => {};

const mockStore = configureStore([]);

describe("NestedNav Tests", () => {
  let store;

  afterEach(cleanup);

  const createComponent = (title: string) => {
    store = mockStore({
      nestedNav: {
        title: title,
      },
    });

    store.dispatch = jest.fn();

    return renderer.create(
      <Provider store={store}>
        <NestedNav />
      </Provider>
    );
  };

  it("display top nav with LIST title", async () => {
    const nestedNav = createComponent(TabInfo.LIST.name);
    expect(nestedNav.toJSON()).toMatchSnapshot();
  });

  it("display top nav with HOME title", async () => {
    const nestedNav = createComponent(TabInfo.HOME.name);
    expect(nestedNav.toJSON()).toMatchSnapshot();
  });

  it("display top nav with SUPPORT title", async () => {
    const nestedNav = createComponent(TabInfo.SUPPORT.name);
    expect(nestedNav.toJSON()).toMatchSnapshot();
  });

  it("display top nav with PROFILE title", async () => {
    const nestedNav = createComponent(TabInfo.PROFILE.name);
    expect(nestedNav.toJSON()).toMatchSnapshot();
  });
});
