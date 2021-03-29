import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { ListView } from "../../../src/components/list-view";

describe("ListView Tests", () => {
  afterEach(cleanup);

  it("loading listView page", async () => {
    const listView = render(<ListView />);
    expect(listView).toMatchSnapshot();
  });
});
