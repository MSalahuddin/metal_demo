// @flow
import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../theme';

export default StyleSheet.create({
  btnContainer:{
    paddingVertical: Metrics.ratio(10),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryBtn,
    // width: Metrics.screenWidth * 0.7,
    borderRadius: Metrics.ratio(30),
    paddingHorizontal: Metrics.ratio(10),
    justifyContent: "space-between",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.27,
    elevation: 3,
    marginTop: "auto",
    marginBottom: Metrics.ratio(35)
  },
  leftIconContainer: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
  leftIcon:{
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
  rightIconContainer: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
  rightIcon: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
  textStyle: {
    color: Colors.white,
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.RobotoRegular
  },
  
});
