import { StyleSheet } from "react-native";
import Colors from "../../config/Colors";

export default StyleSheet.create({
    LogoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 20
    },
    logoText: {
        color: Colors.primary,
        fontWeight: "900",
        fontSize:20
    }
})