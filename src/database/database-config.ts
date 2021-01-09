export type DatabaseSettings = {
  APP_ID: string;
  JAVASCRIPT_KEY: string;
  SERVER_URL: string;
};

export default class DatabaseConfig {
  public static readonly DEV: DatabaseSettings = {
    APP_ID: "EUO67XH1x42A9d4RqENiAieicoUmLShUab6FP6gl",
    JAVASCRIPT_KEY: "rigzkxQ8tEEKDXVx3KOM9DqmujcShLncEu5x0iVv",
    SERVER_URL: "https://parseapi.back4app.com/",
  };
  // TODO: Add Prod DB Settings
}
