import {StyleSheet} from "react-native";
import { Fonts , Colors, Metrics} from "../../theme";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    exchangeRateText: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.thirteen,
    },
    paymentDetails: {
        backgroundColor: Colors.white,
        paddingVertical: Metrics.ratio(20),
        paddingHorizontal: Metrics.ratio(20),
        marginTop: "auto",
        borderTopWidth: Metrics.ratio(2),
        borderTopColor: Colors.greyContent
    },
    paymentDetailsHeading: {
        fontFamily: Fonts.type.RobotoMedium,
        fontSize: Fonts.size.sixteen,
        color: Colors.primaryBtn,
        marginVertical: Metrics.ratio(7)
    },
    paymentDetailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Metrics.ratio(7)
    },
    detailType: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.fourteen,
        color: Colors.mantle_grey
    },
    detailValue: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.fourteen,
        color: Colors.placeholderContent
    },
    totalPayment: {
        fontFamily:Fonts.type.RobotoBold,
        fontSize: Fonts.size.sixteen,
        color: Colors.placeholderContent
    }
})