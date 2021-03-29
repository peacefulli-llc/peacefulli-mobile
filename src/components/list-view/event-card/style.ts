import { StyleSheet } from "react-native";
import { Color } from "../../../constants/color-constants";

export const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  imageContainer: {
    width: "33%",
    marginRight: 6,
  },
  textContainer: {
    width: "58%",
  },
  favoriteContainer: {
    width: "7%",
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 8,
  },
  dateText: {
    color: Color.purple,
    fontFamily: "pt_sans_regular",
    fontSize: 14,
  },
  titleText: {
    color: Color.black,
    fontFamily: "pt_sans_bold",
    fontSize: 16,
    marginTop: 4,
  },
  descriptionText: {
    color: Color.dark_grey,
    fontFamily: "pt_sans_regular",
    flexWrap: "wrap",
    fontSize: 11,
    marginTop: 4,
  },
  locationText: {
    color: Color.black,
    fontFamily: "pt_sans_italic",
    fontSize: 10,
    marginLeft: 4,
  },
  divider: {
    backgroundColor: Color.light_grey,
    marginTop: 16,
    height: 2,
    opacity: 0.5,
  },
  locationPin: {
    height: 10,
  },
  favoriteIcon: {
    height: 24,
  },
});
