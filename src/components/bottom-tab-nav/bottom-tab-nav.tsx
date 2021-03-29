import React, { PureComponent } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Color } from "../../constants/color-constants";
import { styles } from "./style";
import { TabDetails, TabInfo } from "./tab-details";
import { customFonts } from "../../constants/font-constants";

const Tab = createBottomTabNavigator();

export interface BottomTabNavProps {
  defaultTab: string;
}

export interface BottomTabNavState {
  fontLoaded: boolean;
}

export class BottomTabNav extends PureComponent<
  BottomTabNavProps,
  BottomTabNavState
> {
  constructor(props: BottomTabNavProps) {
    super(props);
    this.state = { fontLoaded: false };
  }

  create_tab(tabDetails: TabDetails): JSX.Element {
    return (
      <Tab.Screen
        name={tabDetails.name}
        component={tabDetails.component}
        options={{
          tabBarLabel: tabDetails.name,
          tabBarIcon: ({ focused }) => {
            const color = focused ? Color.pink : Color.purple;
            return (
              <Icon
                name={tabDetails.icon}
                size={styles.tabIcon.height}
                color={color}
              />
            );
          },
        }}
      />
    );
  }

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={async () => {
            await Font.loadAsync(customFonts);
          }}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={this.props.defaultTab}
          tabBarOptions={{
            activeTintColor: Color.pink,
            inactiveTintColor: Color.purple,
            labelStyle: styles.text,
            style: styles.tabContainer,
          }}
        >
          {this.create_tab(TabInfo.LIST)}
          {this.create_tab(TabInfo.HOME)}
          {this.create_tab(TabInfo.SUPPORT)}
          {this.create_tab(TabInfo.PROFILE)}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
