import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from "../../theme";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey,
    },
    subContainer: {
        marginHorizontal: Metrics.screenWidth * 0.05,

    },
    text: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.fourteen,
        color: Colors.placeholderContent,
        marginVertical: Metrics.ratio(20),
    },
    addAvatar: {
        width: Metrics.ratio(60),
        height: Metrics.ratio(60),
        borderRadius: Metrics.ratio(100),
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Metrics.ratio(5),
        // width: Metrics.screenWidth * 0.9,
        justifyContent: "space-between",
        alignItems: "center",
    },
    viewAll: {
        width: Metrics.ratio(60),
        height: Metrics.ratio(60),
        borderRadius: Metrics.ratio(100),
        backgroundColor: Colors.white,
        alignItems: 'center',
        paddingVertical: 20,
        elevation: 5,
    },
    dot: {
        height: Metrics.ratio(6),
        width: Metrics.ratio(6),
        borderRadius: Metrics.ratio(3),
        marginRight: 2,
        backgroundColor: Colors.placeholderContent,
    },
    btnContainer: {
        alignItems: "center",
        marginTop: 50,
        justifyContent: 'flex-end',
    },

})