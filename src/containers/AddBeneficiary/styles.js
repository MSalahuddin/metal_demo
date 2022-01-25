import { StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "../../theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey,
    },
    subContainer: {
        marginHorizontal: Metrics.ratio(20),
        alignItems: 'center',
        marginBottom: Metrics.ratio(20),
    },
    image: {
        marginBottom: Metrics.ratio(30)
    },
    inputContainer: {
        width: '90%',
        borderWidth: Metrics.ratio(1),
        borderColor: Colors.inputBorder,
        borderRadius: Metrics.ratio(5),
        paddingHorizontal: Metrics.ratio(15),
        paddingTop: Metrics.ratio(15),
        marginBottom: Metrics.ratio(8)
    },
    selectButon: {
        height: Metrics.screenHeight * 0.14,
        width: Metrics.screenWidth * 0.25,
        borderRadius: Metrics.ratio(10),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: Metrics.ratio(7),
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.14,
        shadowRadius: 1.27,
        elevation: 3,
    },
    text: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.twelve,
        color: Colors.mantle_grey,
        marginTop: Metrics.ratio(5)
    },
    selectOption: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: Metrics.ratio(20)
    },
    selectOptionContainer: {
        marginHorizontal: Metrics.screenWidth * 0.05,
        marginBottom: Metrics.screenHeight * 0.06,
    },
    selectOptionHeading: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.eighteen,
        color: Colors.secondaryBtnText,
        marginTop: Metrics.ratio(15)
    },
})