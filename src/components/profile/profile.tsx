import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export interface ProfileProps {}

export interface ProfileState {}

export class Profile extends PureComponent<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TODO: Create Profile View!</Text>
      </View>
    );
  }
}
