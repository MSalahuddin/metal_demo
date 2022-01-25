import { StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "../../theme";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    filterBtn: {
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
    },
    activeFilterBtn: {
        backgroundColor: Colors.activeFilter,
        borderRadius: Metrics.ratio(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.14,
        shadowRadius: 1.27,
        elevation: 3,
    },
    filterBtnContainer: {
        width: "82%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: Metrics.ratio(10),
        backgroundColor: Colors.inactiveFilter
    },
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 1.27,
    elevation: 3,
    filterImageContainer: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Metrics.ratio(10),
        marginLeft: Metrics.ratio(8),
        backgroundColor: Colors.inactiveFilter,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.14,
        shadowRadius: 1.27,
        elevation: 3,
    },
    filters: {
        flexDirection: "row",
        width: Metrics.screenWidth * 0.9,
        height: Metrics.ratio(55),
    },
    detailsContainer: {
        backgroundColor: Colors.silver,
        borderRadius: Metrics.ratio(20),
        marginHorizontal: Metrics.screenWidth * 0.05,
        marginBottom: Metrics.screenHeight * 0.03,
        paddingVertical: Metrics.screenHeight * 0.02,
        paddingHorizontal: Metrics.screenHeight * 0.03,
        elevation: 5,
    },
    detailsContainerTitle: {
        fontFamily: Fonts.type.RobotoMedium,
        fontSize: Fonts.size.xLarge,
        color: Colors.placeholderContent,
    },
    detailsContainerSubtitle: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.sixteen,
        color: Colors.placeholderContent,
    },
    transactionIdContainer: {
        backgroundColor: Colors.white,
        elevation: 5,
        borderRadius: Metrics.ratio(20),
        marginHorizontal: Metrics.screenWidth * 0.05,
        marginVertical: Metrics.ratio(10),
        flexDirection: "row",
    },
    transactionIdTitle: {
        fontFamily: Fonts.type.RobotoMedium,
        fontSize: Fonts.size.large,
        color: Colors.placeholderContent,
    },
    transactionIdsubTitle: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.fourteen,
        color: Colors.placeholderContent,
    },
    transactionID: {
        fontFamily: Fonts.type.RobotoRegular,
        color: Colors.placeholderContent,
        fontSize: Fonts.size.fourteen,
    },
    dateContainer: {
        width: Metrics.ratio(60),
        height: Metrics.ratio(90),
        borderRadius: Metrics.ratio(10),
        marginHorizontal: Metrics.ratio(20),
        marginVertical: Metrics.ratio(15),
        backgroundColor: Colors.primaryBtn,
        justifyContent: 'center',
        alignItems: 'center',
    },
    month: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.fourteen,
        color: Colors.white,
    },
    date: {
        fontFamily: Fonts.type.RobotoMedium,
        fontSize: Fonts.size.sixteen,
        color: Colors.white,
    },
    year: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.fourteen,
        color: Colors.white,
    },

})