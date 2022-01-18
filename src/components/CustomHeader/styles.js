import { StyleSheet } from "react-native";
import {Metrics, Colors, Fonts} from "../../theme";

export default StyleSheet.create({
    container:{
        flexDirection: "row",
         alignItems: "center", 
         height: Metrics.screenHeight * 0.13,
         justifyContent: "space-between",
         paddingHorizontal: Metrics.ratio(20)
   },
   leftText:{
    fontFamily: Fonts.type.RobotoRegular,
    fontSize: Fonts.size.eighteen,
    color: Colors.placeholderContent
    }
})