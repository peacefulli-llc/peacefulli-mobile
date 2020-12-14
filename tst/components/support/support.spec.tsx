import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { Support } from "../../../src/components/support";

describe("Support Tests", () => {
  afterEach(cleanup);

  // TODO: update this file when implementing support page
  it("loading support page", async () => {
    const support = render(<Support />);
    expect(support).toMatchSnapshot();
  });
});
