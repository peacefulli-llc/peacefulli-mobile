import { ComponentClass } from "react";
import { Home } from "../home";
import { Support } from "../support";
import { Profile } from "../profile";
import { ListView } from "../list-view";

// TODO: This needs to be localized
enum TabName {
  SUPPORT = "SUPPORT",
  HOME = "HOME",
  LIST = "LIST",
  PROFILE = "PROFILE",
}

export type TabDetails = {
  name: string;
  component: ComponentClass<any, any>;
  icon: string;
};

export class TabInfo {
  public static SUPPORT: TabDetails = {
    name: TabName.SUPPORT,
    component: Support,
    icon: "hand-holding-heart",
  };
  public static HOME: TabDetails = {
    name: TabName.HOME,
    component: Home,
    icon: "home",
  };
  public static LIST: TabDetails = {
    name: TabName.LIST,
    component: ListView,
    icon: "list",
  };
  public static PROFILE: TabDetails = {
    name: TabName.PROFILE,
    component: Profile,
    icon: "user-circle",
  };
}
