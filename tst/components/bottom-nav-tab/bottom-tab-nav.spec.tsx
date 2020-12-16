import React from "react";
import { cleanup } from "@testing-library/react-native";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { BottomTabNav } from "../../../src/components/bottom-tab-nav/bottom-tab-nav";

jest.mock("react-native-vector-icons/FontAwesome5", () => "Icon");

configure({ adapter: new Adapter() });

describe("BottomTabNav Tests", () => {
  afterEach(cleanup);

  it("loading nav with the LIST default", async () => {
    const nav = shallow(<BottomTabNav defaultTab="LIST" />);
    nav.setState({ fontLoaded: true });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });

  it("loading nav with the HOME default", async () => {
    const nav = shallow(<BottomTabNav defaultTab="HOME" />);
    nav.setState({ fontLoaded: true });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });

  it("loading nav with the SUPPORT default", async () => {
    const nav = shallow(<BottomTabNav defaultTab="SUPPORT" />);
    nav.setState({ fontLoaded: true });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });

  it("loading nav with the PROFILE default", async () => {
    const nav = shallow(<BottomTabNav defaultTab="PROFILE" />);
    nav.setState({ fontLoaded: true });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });

  it("font not loaded", async () => {
    const nav = shallow(<BottomTabNav defaultTab="LIST" />);
    nav.setState({ fontLoaded: false });
    expect(shallowToJson(nav)).toMatchSnapshot();
  });
});
