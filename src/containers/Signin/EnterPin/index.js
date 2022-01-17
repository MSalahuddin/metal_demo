// @flow
import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { Colors, Metrics, Fonts } from '../../../theme';
import { OTPInput, Button } from '../../../components';
import { AuthString } from "../../../constant/stringConstants";
import {
  bg_half,
  login_bg,
  transparent_logo,
  avatar,
  fingerprint_black,
  login_line,
  up_arrow
} from "../../../assets/images";
import { SCREENS } from "../../../constant/constant";
import { drawerMenuSwitched } from '../../../redux/actions/NavigationAction';


const EnterPin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [pin, setPin] = useState('');

  const createPin = async pin => {
    handleNavigate()
  };

  // handle navigation
  const handleNavigate = () => {
    dispatch(drawerMenuSwitched("", SCREENS.HOME))
  };

  const renderPinInput = () => {
    return (
      <View style={{ alignItems: "center", }}>
        <OTPInput
          textInputValue={pin}
          pinCount={4}
          onChangeText={pin => setPin(pin)}
          underlineStyleBase={styles.underlineStyleBase}
          underlineStyleHighLighted={[styles.underlineStyleHighLighted]}
          handleVerifyOtp={pin => {
            createPin(pin);
          }}
        />
      </View>
    )
  }

  return (
    <ImageBackground
      style={styles.container}
      source={login_bg}>
      {/* <ImageBackground
          blurRadius={3}
          style={styles.image}
          source={bg_half}
      > */}
      <Image style={{
        width: Metrics.ratio(200),
        height: Metrics.ratio(60),
        bottom: Metrics.ratio(60),
      }} source={transparent_logo} />
      <View style={{
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
      }}>
        <View style={{
          position: 'absolute',
          top: Metrics.ratio(-50),
          borderRadius: Metrics.ratio(100),
          borderColor: Colors.white,
          borderWidth: Metrics.ratio(4)
        }}>
          <Image source={avatar} />
        </View>
        <Text style={
          {
            fontFamily: Fonts.type.RobotoMedium,
            fontSize: Fonts.size.sixteen,
            color: Colors.placeholderContent,
            marginTop: Metrics.ratio(55)
          }
        }>Lola</Text>
        <Text style={{
          fontFamily: Fonts.type.RobotoRegular,
          fontSize: Fonts.size.thirteen,
          color: Colors.greyContent,
          marginTop: Metrics.ratio(5),
          textAlign: "center",
          lineHeight: Metrics.ratio(25)
        }}>{AuthString.Signin.enterPinNumber}</Text>

        {renderPinInput()}

        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.SCAN_BIOMETRIC)}
          style={{ marginVertical: Metrics.ratio(15) }}>
          <Image source={fingerprint_black} />
        </TouchableOpacity>

        <Button
          customBtnStyle={{ width: "100%", marginBottom: 0 }}
          btnText={AuthString.ButtonText.login}
          onPress={() => handleNavigate()} />

        <Text style={
          {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.fourteen,
            color: Colors.primaryBtn,
            marginTop: Metrics.ratio(20)
          }
        }>{AuthString.Signin.forgotPassword}</Text>
        <View style={{ marginTop: Metrics.ratio(10), alignItems: "center" }}>
          <Image source={login_line} />
          <Image style={{ top: Metrics.ratio(-10) }} source={up_arrow} />
        </View>
        <Text style={
          {
            fontFamily: Fonts.type.RobotoMedium,
            fontSize: Fonts.size.fourteen,
            color: Colors.secondaryBtnText,
            marginVertical: Metrics.ratio(20)
          }
        }>{AuthString.Signin.loginOtherId}</Text>
      </View>

      {/* </ImageBackground> */}
    </ImageBackground>
  );
};


EnterPin.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.bool
  }).isRequired
};

export default EnterPin;
