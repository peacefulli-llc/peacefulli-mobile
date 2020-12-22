import { DatabaseConfig } from "../../src/database/database-config";
import ParseServer from "../../src/database/parse-server";

describe("ParseServer Tests", () => {
  let ParseMock: any;
  let database: any;

  beforeAll(() => {
    ParseMock = jest.createMockFromModule("parse");
    database = ParseServer.getInstance(ParseMock, null);
  });

  it("initializing ParseServer", async () => {
    const actualDatabase = ParseServer.getInstance(ParseMock, null);
    expect(actualDatabase).toBe(database);

    expect(ParseMock.setAsyncStorage).toHaveBeenCalledTimes(1);
    expect(ParseMock.setAsyncStorage).toHaveBeenCalledWith(null);
    expect(ParseMock.initialize).toHaveBeenCalledTimes(1);
    expect(ParseMock.initialize).toHaveBeenCalledWith(
      DatabaseConfig.DEV.APP_ID,
      DatabaseConfig.DEV.JAVASCRIPT_KEY
    );
    expect(ParseMock.serverURL).toBe(DatabaseConfig.DEV.SERVER_URL);
    expect(ParseMock.Object.extend).toHaveBeenCalledTimes(1);
    expect(ParseMock.Object.extend).toHaveBeenCalledWith("Event");
  });

  it("get events from DB", async () => {
    const events = database.getEvents(10, 1, "dateTime");
    expect(ParseMock.Query).toHaveBeenCalledTimes(1);
    expect(events).toBeInstanceOf(Promise);
  });
});
