import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse";
import React from "react";
import { BottomTabNav } from "./src/components/bottom-tab-nav/bottom-tab-nav";
import { TabInfo } from "./src/components/bottom-tab-nav/tab-details";
import ParseServer from "./src/database/parse-server";

// This disables the annoying warning messages in the simulator
console.disableYellowBox = true;

export const Database = ParseServer.getInstance(Parse, AsyncStorage);

export default function App() {
  return <BottomTabNav defaultTab={TabInfo.LIST.name} />;
}
