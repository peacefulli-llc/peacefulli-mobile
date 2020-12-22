import { default as App, default as Database } from "../App";

jest.mock("../src/database/parse-server");

describe("Main App Tests", () => {
  it("exports are non-null", async () => {
    expect(Database).not.toBeNull();
    expect(App).not.toBeNull();
  });
});
