import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../theme';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey,
    },
    innerContent: {
        backgroundColor: Colors.white,
        height: Metrics.ratio(60),
        weidth: Metrics.ratio("100%"),
        marginHorizontal: Metrics.ratio(25),
        paddingHorizontal: Metrics.ratio(20),
        marginVertical: Metrics.ratio(10),
        borderRadius: Metrics.ratio(15),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation: 3,
    },
    text: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.sixteen,
        color: Colors.placeholderContent
    },

});