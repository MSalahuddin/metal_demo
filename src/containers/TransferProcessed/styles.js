import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    headingText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: Fonts.type.RobotoRegular,
        color: Colors.placeholderContent,
        fontSize: Fonts.size.xLarge,
    },
    text: {
        fontFamily: Fonts.type.RobotoRegular,
        color: Colors.placeholderContent,
        fontSize: Fonts.size.sixteen,
        marginVertical: Metrics.ratio(5),
    },
    amounts: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Metrics.ratio(30),
    },
    sentAmount: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: Fonts.type.RobotoMedium,
        color: Colors.placeholderContent,
        fontSize: Fonts.size.xLarge,
    },
    sentAmountText: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.sixteen,
        color: Colors.placeholderContent,
    },
    buttonContainer: {
        alignItems: 'center',
    },

});