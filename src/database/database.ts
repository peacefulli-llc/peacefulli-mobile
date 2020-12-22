interface Database {
  /**
   * Get a sorted set of events, supported by pagination.
   *
   * @param numResults Number of results to be returned, and the size of each page
   * @param pageNumber Page to get results from
   * @param sortBy Column name from `Event` table to sort by, in ascending order
   * @returns Generic JavaScript `Promise` object
   *
   * @example
   * // Sort the events by ascending dateTime
   * // Skip the first 20 results (pages 1 and 2)
   * // Return the next 10 results (page 3)
   * Database.getEvents(10, 3, "dateTime").
   *  .then((results) => {
   *    // do something with results
   *  })
   *  .catch((error) => {
   *    // do something with error
   *  });
   */
  getEvents(
    numResults: number,
    pageNumber: number,
    sortBy: string
  ): Promise<any>;

  // TODO: Add createEvent() method
  // TODO: Add deleteEvent() method
}
