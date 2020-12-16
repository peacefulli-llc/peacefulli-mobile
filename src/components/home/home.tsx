import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export interface HomeProps {}

export interface HomeState {}

export class Home extends PureComponent<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO: Create Home View!</Text>
      </View>
    );
  }
}
