import { StyleSheet } from "react-native";
import { Color } from "../../../constants/color-constants";

export const styles = StyleSheet.create({
  headerText: {
    fontFamily: "pt_sans_bold",
    fontWeight: "bold",
    color: Color.purple,
    fontSize: 24,
  },
  topNavIcon: {
    height: 32,
    width: 32,
    marginLeft: 16,
  },
});
