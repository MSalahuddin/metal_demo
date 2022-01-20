import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    subContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: Metrics.ratio(25),
        marginHorizontal: Metrics.ratio(20),
    },
    heading: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.large,
        color: Colors.placeholderContent,
    },
    buttonContainer: {
        alignItems: 'center',
    },

});