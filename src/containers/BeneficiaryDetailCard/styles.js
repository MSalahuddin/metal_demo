import {StyleSheet} from "react-native";
import { Fonts , Colors, Metrics} from "../../theme";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer:{
        width: Metrics.screenWidth * 0.9,
        height: Metrics.screenHeight * 0.35,
        marginHorizontal: Metrics.screenWidth * 0.05,
        paddingHorizontal: Metrics.ratio(20),
        paddingVertical: Metrics.ratio(25)
        },
    avatarContainer: {
        width: Metrics.ratio(40),
        height: Metrics.ratio(40),
        backgroundColor: Colors.avatarNameContainer,
        borderRadius: Metrics.ratio(44),
        justifyContent: "center",
        alignItems: "center"
    },
    avatarText: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.large,
        color: Colors.white
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    editButtonContainer: {
        backgroundColor: Colors.white,
        borderRadius: Metrics.ratio(20),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Metrics.ratio(20)
        },
        deleteBtn: {
            backgroundColor: Colors.white,
            borderRadius: Metrics.ratio(44),
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: Metrics.ratio(40),
            height: Metrics.ratio(40),
            marginLeft: Metrics.ratio(20)
            },
    userName: {
        fontFamily: Fonts.type.RobotoBold,
        fontSize: Fonts.size.sixteen,
        color: Colors.white,
        marginTop: Metrics.ratio(5)
    },
    detailHeadText: {
        fontSize: Fonts.size.tiny,
        color: Colors.white,
        fontFamily: Fonts.type.RobotoRegular,
        textAlign: "left"
    },
    detailValText: {
        fontSize: Fonts.size.twelve,
        color: Colors.white,
        fontFamily: Fonts.type.RobotoRegular,
        textAlign: "left"
    }
})