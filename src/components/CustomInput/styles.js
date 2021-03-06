// @flow
import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../theme';

export default StyleSheet.create({
  InputView: {
    height: Metrics.ratio(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.underlineColor,
  },
  textInputStyle: {
    // flex: 0.95,
    fontFamily: Fonts.type.RobotoRegular,
    color: Colors.placeholderContent,
    fontSize: Fonts.size.eighteen,
    // paddingHorizontal: Metrics.ratio(3),
    paddingTop: Metrics.ratio(10),
  },
  inputIcon: {
    width: Metrics.ratio(40),
  },
  errormsg: {
    color: 'red',
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.MontserratRegular,
    marginHorizontal: Metrics.ratio(15),
  },
  rightIcon: {
    marginTop: Metrics.ratio(10)
  },
  labelTopText: {
    fontFamily: Fonts.type.RobotoRegular,
    fontSize: Fonts.size.twelve,
    color: Colors.mantle_grey
  }
});
