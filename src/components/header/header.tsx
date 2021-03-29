import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export interface HeaderProps {}

export interface HeaderState {}

export class Header extends PureComponent<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO: Create Header Bar</Text>
      </View>
    );
  }
}
