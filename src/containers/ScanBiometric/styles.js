// @flow
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: Colors.white,
  },
  headerTextStyle: {
    fontSize: Metrics.ratio(20),
    color: '#454F63',
    fontFamily: Fonts.type.RobotoBlack,
  },
 image: {
     flex: 1,
     width: Metrics.screenWidth,
     height: Metrics.screenHeight * 0.5,
     alignItems: 'center',
 },
});
