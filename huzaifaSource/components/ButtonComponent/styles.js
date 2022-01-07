import { StyleSheet } from "react-native";
import Colors from "../../config/Colors";

export default StyleSheet.create({
    ButtonComponent:{
        backgroundColor: Colors.subPrimary,
        width: "100%",
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color:Colors.white,
    }

})