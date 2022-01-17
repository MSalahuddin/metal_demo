// @flow
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  metalsContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primaryBtn,
    paddingHorizontal: Metrics.ratio(10),
    height: Metrics.ratio(30),
    alignItems: "center",
    borderRadius: Metrics.ratio(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 2.27,
    elevation: 3,
    marginLeft: "auto"
  },
  tokenCount: {
    color: Colors.white,
    fontFamily: Fonts.type.RobotoRegular,
    fontSize: Fonts.size.fourteen,
    marginLeft: Metrics.ratio(7)
  },
  carouselContainer: {
    height: Metrics.screenHeight * 0.35,
    backgroundColor: Colors.secondaryBtn,
  },
  selectButon: {
    height: Metrics.screenHeight * 0.11,
    width: Metrics.screenWidth * 0.35,
    borderRadius: Metrics.ratio(10),
    justifyContent: "center", 
    alignItems: "center",
    marginHorizontal: Metrics.ratio(7),
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 1.27,
    elevation: 3,
  }
});
