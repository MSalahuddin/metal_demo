// ============ Define Colors Variables here ========== //

import { Platform } from "react-native";
import { background } from "../assets/images";

const white = "#FFFFFF";
const black = "#000000";
const grey = Platform.select({
  ios: "#F4F4F4",
  android: "#FAFAFA"
});

// app generic colors
const primaryBtn = "#009DDD";
const secondaryBtn = "#ECEEF7";
const secondaryBtnText = "#001E3E";
const modalBorder = "#97979712";
const mainHeading = "#1F2D3D";
const headingContent = "#3C4858";
const greyContent = "#D3D3D3";
const placeholderContent = "#203152"
const semiTransparent = "rgba(0,0,0,0.7)";
const underlineColor = "#D3D7DD";
const windowTint = "rgba(0, 0, 0, 0.4)";
const windowTintWhite = "rgba(255, 255, 255, 0.1)";
const transparent = "rgba(0,0,0,0)";
const cornflowerBlue = "#009DDD0D";
const mantle_grey = "#8D9390";
const orange_text = "#EF9C55";
const green_text = "#00D832";
const placeholderContentWithOpacity = "rgba(32, 49, 82, 0.55)";
const light_blue = "#009DDD4D";
const mineShaft = "#222222";
const avatarNameContainer = "rgba(0, 0, 0, 0.4)";
const silver = "#E9E9E9";
const dardBlue = "rgba(0, 30, 62, 1)";
const inputBorder  = "rgba(179, 180, 180, 1)";
const activeFilter = "rgba(236, 238, 247, 1)";
const  inactiveFilter = "rgba(233, 233, 233, 1)"
// app theme colors

// ====================================================


export default {
  white, 
  black, 
  grey,
  primaryBtn,
  secondaryBtn,
  secondaryBtnText,
  modalBorder,
  mainHeading,
  headingContent,
  greyContent,
  placeholderContent,
  semiTransparent,
  windowTint,
  windowTintWhite,
  transparent,
  underlineColor,
  cornflowerBlue,
  mantle_grey,
  orange_text,
  green_text,
  placeholderContentWithOpacity,
  light_blue,
  mineShaft,
  avatarNameContainer,
  silver,
  dardBlue,
  inputBorder,
  activeFilter,
  inactiveFilter 
};
