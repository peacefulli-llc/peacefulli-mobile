import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { Header } from "../../../src/components/header";

describe("Header Tests", () => {
  afterEach(cleanup);

  // TODO: update this file when implementing header page
  it("loading header page", async () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });
});
