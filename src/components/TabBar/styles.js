// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "white",
    elevation: 4
  },
  button: {
    width: Metrics.screenWidth * 0.5,
    padding: Metrics.ratio(16),
  },
  buttonText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.bold,
  },
});
