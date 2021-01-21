import DatabaseConfig from "../database-config";
import DatabaseFactory from "../database-factory";
import EventDatabase from "../event/event-database";
import ParseEventDatabase from "./parse-event-database";

/**
 * `ParseDatabaseFactory` is a `DatabaseFactory` implementation that uses the Parse JavaScript SDK.
 * This class is a Singleton and has no public constructor, you must use its `getInstance(...)` method.
 */
export default class ParseDatabaseFactory implements DatabaseFactory {
  private static instance: DatabaseFactory;
  private Parse: any;

  /**
   * @param Parse Module from the Parse JavaScript SDK
   * @param AsyncStorage Module from the React Native Async Storage library
   * @returns The same instance of `ParseDatabaseFactory` that it was first instantiated with
   */
  public static getInstance(Parse: any, AsyncStorage: any): DatabaseFactory {
    if (this.instance == null) {
      this.instance = new ParseDatabaseFactory(Parse, AsyncStorage);
    }

    return this.instance;
  }

  public getEventDatabase(): EventDatabase {
    return new ParseEventDatabase(this.Parse);
  }

  // TODO: implement getUserDatabase() method

  private constructor(Parse: any, AsyncStorage: any) {
    this.initialize(Parse, AsyncStorage);
  }

  private initialize(Parse: any, AsyncStorage: any): void {
    this.Parse = Parse;
    this.Parse.setAsyncStorage(AsyncStorage);

    // TODO: Set config based on dev or prod environment
    this.Parse.initialize(
      DatabaseConfig.DEV.APP_ID,
      DatabaseConfig.DEV.JAVASCRIPT_KEY
    );
    this.Parse.serverURL = DatabaseConfig.DEV.SERVER_URL;
  }
}
