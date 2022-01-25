// @flow
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors, Metrics, Fonts } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    width: Metrics.ratio(200),
    height: Metrics.ratio(60),
    bottom: Metrics.ratio(60),
  },
  subContainer: {
    backgroundColor: Colors.white,
    width: Metrics.screenWidth * 0.85,
    paddingHorizontal: Metrics.screenWidth * 0.07,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  text: {
    fontFamily: Fonts.type.RobotoRegular,
    fontSize: Fonts.size.sixteen,
    color: Colors.greyContent,
    marginTop: Metrics.ratio(10),
    textAlign: "center",
    lineHeight: Metrics.ratio(25)
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
  underlineStyleBase: {
    width: 40,
    height: 40,
    borderWidth: 0,
    borderBottomWidth: Metrics.ratio(2),
    borderColor: Colors.greyContent,
    fontFamily: Fonts.type.light,
    fontSize: Metrics.ratio(16),
    color: Colors.greyContent,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.primaryBtn,
    borderBottomWidth: Metrics.ratio(2),
  },
});
