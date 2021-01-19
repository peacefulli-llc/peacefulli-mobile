import DatabaseConfig from "../../../src/database/database-config";
import ParseDatabaseFactory from "../../../src/database/parse/parse-database-factory";

describe("ParseDatabaseFactory Tests", () => {
  let ParseMock: any;
  let databases: any;

  beforeAll(() => {
    ParseMock = jest.createMockFromModule("parse");
    databases = ParseDatabaseFactory.getInstance(ParseMock, null);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("initialize database factory", async () => {
    const actualDatabases = ParseDatabaseFactory.getInstance(ParseMock, null);
    expect(actualDatabases).toBe(databases);

    expect(ParseMock.setAsyncStorage).toHaveBeenCalledTimes(1);
    expect(ParseMock.setAsyncStorage).toHaveBeenCalledWith(null);
    expect(ParseMock.initialize).toHaveBeenCalledTimes(1);
    expect(ParseMock.initialize).toHaveBeenCalledWith(
      DatabaseConfig.DEV.APP_ID,
      DatabaseConfig.DEV.JAVASCRIPT_KEY
    );
    expect(ParseMock.serverURL).toBe(DatabaseConfig.DEV.SERVER_URL);
  });
});
