import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },

    innerContent: {
        backgroundColor: '#FFFFFF',
        width: 370,
        height: 70,
        borderRadius: 15,
        marginTop: 30,
        elevation: 5,
    },

    subContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingLeft: 5,

    },

    text: {
        fontSize: 30,
        position: 'relative',
        top: 30,
        left: 20,
    },

});