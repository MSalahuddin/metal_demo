// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    borderBottomColor: Colors.greyContent,
    borderBottomWidth: Metrics.ratio(2),
  },
  button: {
    width: Metrics.screenWidth * 0.4,
    padding: Metrics.ratio(16),
  },
  buttonText: {
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.RobotoBold,
  },
});
