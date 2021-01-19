import EventDatabase from "./event/event-database";

/**
 * This defines an Abstract Factory interface for vending database objects.
 */
export default interface DatabaseFactory {
  getEventDatabase(): EventDatabase;
  // TODO: add getUserDatabase() method
}
