import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { Home } from "../../../src/components/home";

describe("Home Tests", () => {
  afterEach(cleanup);

  // TODO: update this file when implementing home page
  it("loading home page", async () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
