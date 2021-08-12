import { ComponentClass } from "react";
import { Home } from "../home";
import { Support } from "../support";
import { Profile } from "../profile";
import { ListView } from "../list-view";
import { NavTabName } from "../../store/states/nav/nav-state";

export type TabDetails = {
  name: string;
  component: ComponentClass<any, any>;
  icon: string;
};

export class TabInfo {
  public static readonly SUPPORT: TabDetails = {
    name: NavTabName.SUPPORT,
    component: Support,
    icon: "hand-holding-heart",
  };
  public static readonly HOME: TabDetails = {
    name: NavTabName.HOME,
    component: Home,
    icon: "home",
  };
  public static readonly LIST: TabDetails = {
    name: NavTabName.LIST,
    component: ListView,
    icon: "list",
  };
  public static readonly PROFILE: TabDetails = {
    name: NavTabName.PROFILE,
    component: Profile,
    icon: "user-circle",
  };
}
