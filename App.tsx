import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { TabInfo } from "./src/components/navigation/bottom-tab-nav/tab-details";
import ParseServer from "./src/database/parse-server";
import { customFonts } from "./src/constants/font-constants";
import { NestedNav } from "./src/components/navigation/nested-nav";
import { store } from "./src/store/redux-store";

// This disables the annoying warning messages in the simulator
console.disableYellowBox = true;

export const Database = ParseServer.getInstance();

export interface AppProps {}

export interface AppState {
  fontLoaded: boolean;
}

export default class App extends PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fontLoaded: false };
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
      <Provider store={store}>
        <NestedNav title={TabInfo.LIST.name} />
      </Provider>
    );
  }
}
