export default interface EventModel {
  title?: string;
  description?: string;
  location?: string;

  // URL for the image representing the event
  imageSource?: string;

  // JavaScript `Date` object representing when the event begins
  dateTime?: Date;
}

/**
 * Contains string representations of the field names in `EventModel`
 */
export class EventFields {
  public static readonly TITLE: string = "title";
  public static readonly DESCRIPTION: string = "description";
  public static readonly LOCATION: string = "location";
  public static readonly IMAGE_SOURCE: string = "imageSource";
  public static readonly DATE_TIME: string = "dateTime";
}
