import { DRAWAR_MENU_SWITCHED } from "./ActionTypes";
export function drawerMenuSwitched(
  oldView: String,
  newView: String
  //shop: Object,
  //   isAvailable: Boolean = true
) {
  return {
    oldView,
    newView,
    //shop,
    // isAvailable,
    type: DRAWAR_MENU_SWITCHED
  };
}