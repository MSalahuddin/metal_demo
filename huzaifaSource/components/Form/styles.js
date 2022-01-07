import { StyleSheet } from "react-native";
import Colors from "../../config/Colors";

export default StyleSheet.create({
    container: {
        backgroundColor: "#F8F4F4",
        width: "80%",
        height: "50%",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    formInputs: {
        paddingHorizontal: 30,
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    formInputsActions: {
        width: "100%",
        alignItems: "center",
    },
    anotherUser: {
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        alignItems: 'center',
        justifyContent: "center",
        padding: 10
    },
    forgotPwText:{
        color: Colors.primary,
        fontWeight: "700",
        fontSize: 12
    },
    anotherIdText:{
        color: Colors.black,
        fontWeight: "700",
        fontSize: 12
    }
})