import React from "react";
import { BottomTabNav } from "./src/components/bottom-tab-nav/bottom-tab-nav";
import { TabInfo } from "./src/components/bottom-tab-nav/tab-details";

// This disables the annoying warning messages in the simulator
console.disableYellowBox = true;

export default function App() {
  return <BottomTabNav defaultTab={TabInfo.LIST.name} />;
}
