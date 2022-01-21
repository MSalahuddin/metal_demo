import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey,
    },
    beneficiariesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Metrics.ratio(25),
        marginHorizontal: Metrics.ratio(20),
    },
    headingText: {
        fontSize: Fonts.size.eighteen,
        fontWeight: '600',
        color: Colors.placeholderContent,
        
    },
    subHeading: {
        fontSize: Fonts.size.eighteen,
        fontWeight: '600',
        color: Colors.placeholderContent,
        marginHorizontal: Metrics.ratio(25),
        marginVertical: Metrics.ratio(10),
    },
    favorites: {
        fontFamily: Fonts.type.RobotoRegular,
        fontSize: Fonts.size.eighteen,
        color: Colors.placeholderContent,
        marginVertical: Metrics.ratio(25),
        marginHorizontal: Metrics.ratio(20),
    },
});