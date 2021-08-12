import React, { PureComponent } from "react";
import { connect } from "react-redux";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Color } from "../../../constants/color-constants";
import { styles } from "./style";
import { TabDetails, TabInfo } from "./tab-details";
import { customFonts } from "../../../constants/font-constants";
import { NestedNavAction } from "../../../store/actions/nav-action";
import { store } from "../../../store/redux-store";
import { RootState } from "../../../store/states/root-state";
import { NavTabName } from "../../../store/states/nav/nav-state";

const Tab = createBottomTabNavigator();

export interface BottomTabNavProps {
  defaultTab: string;
}

export interface BottomTabNavState {
  fontLoaded: boolean;
}

export class BottomTabNavUnconnected extends PureComponent<
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
        listeners={{
          tabPress: () => {
            store.dispatch(NestedNavAction.tileChanged(tabDetails.name));
          },
        }}
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
    );
  }
}

const mapStateToProps = (state: RootState): BottomTabNavProps => {
  return {
    defaultTab: state.nestedNav.title ?? NavTabName.LIST,
  };
};

export const BottomTabNav = connect(mapStateToProps)(BottomTabNavUnconnected);
