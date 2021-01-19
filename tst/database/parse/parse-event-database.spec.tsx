import EventDatabase from "../../../src/database/event/event-database";
import ParseDatabaseFactory from "../../../src/database/parse/parse-database-factory";
import { EventFields } from "../../../src/database/event/event-model";

describe("ParseEventDatabase Tests", () => {
  let ParseMock: any;
  let database: EventDatabase;

  beforeAll(() => {
    ParseMock = jest.createMockFromModule("parse");
    database = ParseDatabaseFactory.getInstance(
      ParseMock,
      null
    ).getEventDatabase();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("create a new event", async () => {
    const event = database.createEvent({
      title: "My Protest Title",
      description: "My protest description.",
      location: "Los Angeles, CA",
      imageSource: "https://www.pngrepo.com/png/103442/180/protest.png",
      dateTime: new Date(2020, 8, 13),
    });
    expect(event).toBeInstanceOf(Promise);
  });

  it("get a specific event", async () => {
    const event = database.getEvent("someObjectId");
    expect(ParseMock.Query).toHaveBeenCalledTimes(1);
    expect(event).toBeInstanceOf(Promise);
    expectResolve(event);
  });

  it("get list of events", async () => {
    const events = database.getEvents(10, 1, EventFields.DATE_TIME);
    expect(ParseMock.Query).toHaveBeenCalledTimes(1);
    expect(events).toBeInstanceOf(Promise);
    expectResolve(events);
  });

  it("update an event", async () => {
    const event = database.updateEvent("someObjectId", {
      title: "My Protest Title",
      location: "New York, NY",
    });
    expect(event).toBeInstanceOf(Promise);
    expectResolve(event);
  });

  it("gracefully fail updating an invalid event", async () => {
    const spy = jest.spyOn(database, "getEvent").mockImplementation(() => {
      throw Error();
    });

    const event = database.updateEvent("someObjectId", {
      title: "My Protest Title",
      location: "New York, NY",
    });
    expect(event).toBeInstanceOf(Promise);
    expectReject(event);

    spy.mockRestore();
  });

  it("delete an event", async () => {
    const event = database.deleteEvent("someObjectId");
    expect(event).toBeInstanceOf(Promise);
    expectResolve(event);
  });

  it("gracefully fail deleting an invalid event", async () => {
    const spy = jest.spyOn(database, "getEvent").mockImplementation(() => {
      throw Error();
    });

    const event = database.deleteEvent("someObjectId");
    expect(event).toBeInstanceOf(Promise);
    expectReject(event);

    spy.mockRestore();
  });

  function expectResolve(promise: any) {
    promise.then(
      (result: any) => {
        expect(result).not.toBeNull();
      },
      (_error: any) => {
        fail();
      }
    );
  }

  function expectReject(promise: any) {
    promise.then(
      (_result: any) => {
        fail();
      },
      (error: any) => {
        expect(error).not.toBeNull();
      }
    );
  }
});
