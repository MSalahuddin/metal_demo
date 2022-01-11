// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {width: '80%', height: Metrics.screenHeight * 0.1, alignItems: "center", paddingLeft: Metrics.ratio(20)},
  errorMessageStyle: {
    fontSize: Metrics.ratio(10),
    color: Colors.Torch_Red
  }
});
