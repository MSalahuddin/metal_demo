import { StyleSheet } from "react-native";
import Colors from "../../config/Colors";

export default StyleSheet.create({
    InputComponent:{
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor:Colors.textgrey,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between"
    }
})