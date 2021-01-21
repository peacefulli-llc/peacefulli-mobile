import EventDatabase from "../event/event-database";
import EventModel from "../event/event-model";

/**
 * `ParseEventDatabase` is an `EventDatabase` implementation that uses the Parse JavaScript SDK.
 * This class should be instantiated using `ParseDatabaseFactory`.
 */
export default class ParseEventDatabase implements EventDatabase {
  private Parse: any;
  private Event: any;

  /**
   * @param Parse Module from the Parse JavaScript SDK (must be pre-configured)
   */
  public constructor(Parse: any) {
    this.Parse = Parse;
    this.Event = this.Parse.Object.extend("Event");
  }

  public async createEvent(eventModel: EventModel): Promise<any> {
    const event = new this.Event();
    return event.save(eventModel);
  }

  public async getEvent(objectId: string): Promise<any> {
    const query = new this.Parse.Query(this.Event);
    return query.get(objectId);
  }

  public async getEvents(
    numResults: number,
    pageNumber: number,
    sortBy: string
  ): Promise<any> {
    const query = new this.Parse.Query(this.Event);

    // sort all events in ascending order
    query.ascending(sortBy);
    // skip the results from previous pages
    query.skip(numResults * (pageNumber - 1));
    // limit results to a single page
    query.limit(numResults);

    return query.find();
  }

  public async updateEvent(
    objectId: string,
    eventModel: EventModel
  ): Promise<any> {
    this.getEvent(objectId).then((event: Parse.Object) => {
      return event.save(eventModel);
    });
  }

  public async deleteEvent(objectId: string): Promise<any> {
    this.getEvent(objectId).then((event: Parse.Object) => {
      return event.destroy();
    });
  }
}
