import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export interface ListViewProps {}

export interface ListViewState {}

export class ListView extends PureComponent<ListViewProps, ListViewState> {
  constructor(props: ListViewProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO: Create List View!</Text>
      </View>
    );
  }
}
