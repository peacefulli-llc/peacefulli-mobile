import AsyncStorage from "@react-native-async-storage/async-storage";
import ParseDatabaseFactory from "./src/database/parse/parse-database-factory";
import Parse from "parse";
import React from "react";
import { BottomTabNav } from "./src/components/bottom-tab-nav/bottom-tab-nav";
import { TabInfo } from "./src/components/bottom-tab-nav/tab-details";
import DatabaseFactory from "./src/database/database-factory";

// This disables the annoying warning messages in the simulator
console.disableYellowBox = true;

export const Databases: DatabaseFactory = ParseDatabaseFactory.getInstance(
  Parse,
  AsyncStorage
);

export default function App() {
  return <BottomTabNav defaultTab={TabInfo.LIST.name} />;
}
