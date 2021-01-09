import EventModel from "./models/event-model";

export default interface Database {
  /**
   * Create a new event. The returned `Promise` allows you to perform an action
   * after success/failure.
   *
   * @param eventModel Interface containing optional fields
   * @returns Generic JavaScript `Promise` object
   *
   * @example
   * // Create a new event for a protest in LA starting on August 13th, 2020
   * Database.createEvent({
   *  title: "My Protest Title",
   *  description: "My protest description.",
   *  location: "Los Angeles, CA",
   *  imageSource: "https://www.pngrepo.com/png/103442/180/protest.png",
   *  dateTime: new Date(2020, 8, 13)
   * })
   *  .then((result) => {
   *    // do something with result
   *  }, (error) => {
   *    // do something with error
   *  });
   */
  createEvent(eventModel: EventModel): Promise<any>;

  /**
   * Get an existing event using its object id.
   *
   * @returns Generic JavaScript `Promise` object
   *
   * @example
   * Database.getEvent("xWMyZ4YEGZ")
   *  .then((result) => {
   *    // do something with result
   *  }, (error) => {
   *    // do something with error
   *  });
   */
  getEvent(objectId: string): Promise<any>;

  /**
   * Get a sorted set of events, supported by pagination.
   *
   * @param numResults Number of results to be returned, and the size of each page
   * @param pageNumber Page to get results from
   * @param sortBy `Event` field to sort by, in ascending order
   * @returns Generic JavaScript `Promise` object
   *
   * @example
   * // Sort the events by ascending dateTime
   * // Skip the first 20 results (pages 1 and 2)
   * // Return the next 10 results (page 3)
   * Database.getEvents(10, 3, "dateTime")
   *  .then((results) => {
   *    // do something with results
   *  }, (error) => {
   *    // do something with error
   *  });
   */
  getEvents(
    numResults: number,
    pageNumber: number,
    sortBy: string
  ): Promise<any>;

  /**
   * Update fields within an existing event. The returned `Promise` allows you to
   * perform an action after success/failure.
   *
   * @param eventModel Interface containing optional fields
   * @returns Generic JavaScript `Promise` object.
   *
   * @example
   * // Update an existing event with a new title and location
   * Database.updateEvent("xWMyZ4YEGZ", {
   *  title: "New Protest Title",
   *  location: "New York, NY"
   * })
   *  .then((result) => {
   *    // do something with result
   *  }, (error) => {
   *    // do something with error
   *  });
   */
  updateEvent(objectId: string, eventModel: EventModel): Promise<any>;

  /**
   * Delete an existing event. The returned `Promise` allows you to perform an action
   * after success/failure.
   *
   * @returns Generic JavaScript `Promise` object
   *
   * @example
   * Database.deleteEvent("xWMyZ4YEGZ")
   *  .then((result) => {
   *    // do something with result
   *  }, (error) => {
   *    // do something with error
   *  });
   */
  deleteEvent(objectId: string): Promise<any>;
}
