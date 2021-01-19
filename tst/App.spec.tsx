import { default as App, default as Databases } from "../App";

jest.mock("../src/database/parse/parse-database-factory");

describe("Main App Tests", () => {
  it("exports are non-null", async () => {
    expect(Databases).not.toBeNull();
    expect(App).not.toBeNull();
  });
});
