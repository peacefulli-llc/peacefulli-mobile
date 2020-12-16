import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export interface SupportProps {}

export interface SupportState {}

export class Support extends PureComponent<SupportProps, SupportState> {
  constructor(props: SupportProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO: Create Support View!</Text>
      </View>
    );
  }
}
