import { NavTabName } from "../states/nav/nav-state";

export enum NestedNavActionTypes {
  TitleChanged = "NavTitleChanged",
}

export namespace NestedNavAction {
  export const tileChanged = (navTab: NavTabName) => {
    return {
      type: NestedNavActionTypes.TitleChanged,
      payload: navTab,
    };
  };
}
