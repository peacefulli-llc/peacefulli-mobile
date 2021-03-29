import React, { PureComponent } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./style";
import { EventCard } from "./event-card";
import { data } from "../../../tst/mock-data";
import { EventCardProps } from "./event-card/event-card";

export interface ListViewProps {}

export interface ListViewState {
  refreshing: boolean;
  events: EventCardProps[];
}

export class ListView extends PureComponent<ListViewProps, ListViewState> {
  constructor(props: ListViewProps) {
    super(props);

    this.initializeEvents = this.initializeEvents.bind(this);
    this.fetchMoreEvents = this.fetchMoreEvents.bind(this);
    this.onRefresh = this.onRefresh.bind(this);

    this.initializeEvents();
  }

  initializeEvents() {
    const events = this.fetchEventsFromDB();
    this.state = {
      refreshing: false,
      events: events,
    };
  }

  fetchEventsFromDB() {
    console.log("fetching initial data");
    // TODO: Replace with call from DB
    return data;
  }

  fetchMoreEvents = () => {
    console.log("reached end, fetching more data");
    this.setState({ refreshing: true });

    // TODO: Replace with call from DB
    const moreEvents = this.fetchEventsFromDB();

    this.setState({
      refreshing: false,
      events: [...this.state.events, ...moreEvents],
    });
  };

  onRefresh = () => {
    console.log("user has pulled to refresh");
    this.setState({
      events: this.fetchEventsFromDB(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          onEndReachedThreshold={1}
          onEndReached={this.fetchMoreEvents}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => (
            <EventCard
              id={item.id}
              date={item.date}
              title={item.title}
              description={item.description}
              location={item.location}
              imageSource={item.imageSource}
              isFavorite={item.isFavorite}
            />
          )}
        />
      </View>
    );
  }
}
