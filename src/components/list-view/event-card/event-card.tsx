import React, { PureComponent } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Divider } from "react-native-elements";
import { styles } from "./style";
import { customFonts } from "../../../constants/font-constants";
import * as Font from "expo-font";
import { Color } from "../../../constants/color-constants";

export interface EventCardProps {
  id: string;
  date: String;
  title: String;
  location: String;
  description: String;
  imageSource: String;
  isFavorite: Boolean;
}

export interface EventCardState {
  isFavorite: Boolean;
}

export class EventCard extends PureComponent<EventCardProps, EventCardState> {
  constructor(props: EventCardProps) {
    super(props);
    this.state = {
      fontLoaded: false,
      isFavorite: this.props.isFavorite ?? false,
    };

    this.selectingFavorite = this.selectingFavorite.bind(this);
  }

  selectingCard() {
    console.log("The event was pressed");
  }

  selectingFavorite() {
    console.log("Toggling favorite icon");
    var toggleFavorite = !this.state.isFavorite;
    this.setState({ isFavorite: toggleFavorite });
    // TODO: save toggled state in DB
  }

  favorite_icon(isFavorite: Boolean): JSX.Element {
    var starIcon = isFavorite ? (
      <Icon
        size={styles.favoriteIcon.height}
        color={Color.yellow}
        name="star"
        solid
      />
    ) : (
      <Icon
        size={styles.favoriteIcon.height}
        color={Color.yellow}
        name="star"
      />
    );
    return (
      <TouchableWithoutFeedback
        onPress={this.selectingFavorite}
        style={styles.favoriteContainer}
      >
        {starIcon}
      </TouchableWithoutFeedback>
    );
  }

  format_location_line(): JSX.Element {
    return (
      <View style={styles.locationContainer}>
        <Icon
          onPress={this.selectingFavorite}
          name="map-marker-alt"
          size={styles.locationPin.height}
          color={Color.black}
        />
        <Text
          onPress={this.selectingFavorite}
          style={styles.locationText}
          numberOfLines={1}
        >
          {this.props.location}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.selectingCard}
          style={styles.cardContainer}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: this.props.imageSource }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.dateText} numberOfLines={1}>
              {this.props.date}
            </Text>
            <Text style={styles.titleText} numberOfLines={1}>
              {this.props.title}
            </Text>
            <Text
              style={styles.descriptionText}
              numberOfLines={3}
              ellipsizeMode={"tail"}
            >
              {this.props.description}
            </Text>
            {this.format_location_line()}
          </View>

          {this.favorite_icon(this.state.isFavorite)}
        </TouchableOpacity>
        <Divider style={styles.divider} />
      </View>
    );
  }
}
