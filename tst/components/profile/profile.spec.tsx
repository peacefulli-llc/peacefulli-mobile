import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { Profile } from "../../../src/components/profile";

describe("Profile Tests", () => {
  afterEach(cleanup);

  // TODO: update this file when implementing profile page
  it("loading profile page", async () => {
    const profile = render(<Profile />);
    expect(profile).toMatchSnapshot();
  });
});
