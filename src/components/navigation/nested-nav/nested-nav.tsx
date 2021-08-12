import React, { PureComponent } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNav } from "../bottom-tab-nav";
import { styles } from "./style";
import {
  INestedNavState,
  NavTabName,
} from "../../../store/states/nav/nav-state";
import { RootState } from "../../../store/states/root-state";

const Stack = createStackNavigator();

interface NestedNavProps {
  title: string;
}

export class NestedNavUnconnected extends PureComponent<NestedNavProps> {
  constructor(props: NestedNavProps) {
    super(props);

    this.state = { title: this.props.title };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={this.props.title}
            component={BottomTabNav}
            options={{
              animationEnabled: false,
              title: this.props.title,
              headerTitleStyle: styles.headerText,
              headerLeft: () => (
                <Image
                  style={styles.topNavIcon}
                  source={require("../../../assets/logo/gradient.png")}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state: RootState): INestedNavState => {
  return {
    title: state.nestedNav.title ?? NavTabName.LIST,
  };
};

export const NestedNav = connect(mapStateToProps)(NestedNavUnconnected);
