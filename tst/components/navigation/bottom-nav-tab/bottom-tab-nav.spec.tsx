import React from "react";
import { cleanup } from "@testing-library/react-native";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { BottomTabNavUnconnected } from "../../../../src/components/navigation/bottom-tab-nav/bottom-tab-nav";
import { TabInfo } from "../../../../src/components/navigation/bottom-tab-nav/tab-details";

console.error = () => {};
console.warn = () => {};

jest.mock("react-native-vector-icons/FontAwesome5", () => "Icon");

configure({ adapter: new Adapter() });

describe("BottomTabNav Tests", () => {
  afterEach(cleanup);

  it("loading nav with the LIST default", async () => {
    const nav = shallow(
      <BottomTabNavUnconnected defaultTab={TabInfo.LIST.name} />
    );
    nav.setState({ fontLoaded: true });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });

  it("loading nav with the HOME default", async () => {
    const nav = shallow(
      <BottomTabNavUnconnected defaultTab={TabInfo.HOME.name} />
    );
    nav.setState({ fontLoaded: true });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });

  it("loading nav with the SUPPORT default", async () => {
    const nav = shallow(
      <BottomTabNavUnconnected defaultTab={TabInfo.SUPPORT.name} />
    );
    nav.setState({ fontLoaded: true });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });

  it("loading nav with the PROFILE default", async () => {
    const nav = shallow(
      <BottomTabNavUnconnected defaultTab={TabInfo.PROFILE.name} />
    );
    nav.setState({ fontLoaded: true });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });

  it("font not loaded", async () => {
    const nav = shallow(
      <BottomTabNavUnconnected defaultTab={TabInfo.LIST.name} />
    );
    nav.setState({ fontLoaded: false });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });
});
