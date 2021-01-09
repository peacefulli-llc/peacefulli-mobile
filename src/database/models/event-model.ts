export default interface EventModel {
  title?: string;
  description?: string;
  location?: string;

  // URL for the image representing the event
  imageSource?: string;

  // JavaScript `Date` object representing when the event begins
  dateTime?: Date;
}
