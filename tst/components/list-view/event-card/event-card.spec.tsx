import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { EventCard } from "../../../../src/components/list-view/event-card";

describe("EventCard Tests", () => {
  afterEach(cleanup);

  it("event card with favorite enabled", async () => {
    const eventCard = render(
      <EventCard
        id="randomId"
        date="date"
        title="title"
        description="description"
        location="location"
        imageSource="url"
        isFavorite={true}
      />
    );
    expect(eventCard).toMatchSnapshot();
  });

  it("event card with favorite disabled", async () => {
    const eventCard = render(
      <EventCard
        id="randomId"
        date="date"
        title="title"
        description="description"
        location="location"
        imageSource="url"
        isFavorite={false}
      />
    );
    expect(eventCard).toMatchSnapshot();
  });
});
