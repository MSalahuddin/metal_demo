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
import { Images, Colors, Metrics, Fonts } from '../../../theme';
import { CustomTextInput, Button, OTPInput } from '../../../components';
import { request as login_request } from '../../../redux/actions/Login';
import { AuthString } from "../../../constant/stringConstants";
import { login_bg, background, transparent_logo } from "../../../assets/images";
import { SCREENS } from "../../../constant/constant";
import { HeadingText } from "../Resources";

const OTP = ({ navigation, route: { params } }) => {
  const dispatch = useDispatch();
  const [otpNumber, setOtpNumber] = useState('');

  const handleVerifyOtp = async otpNumber => {
    handleNavigate()
  };

  // handle navigation
  const handleNavigate = () => {
    const screenName = !!params?.isLoggedIn ? SCREENS.SCAN_BIOMETRIC : SCREENS.CREATE_PIN
    navigation.navigate(screenName)
  };

  const renderOtpInput = () => {
    return (
      <View style = {{ alignItems: "center", marginVertical: 20,}}>
        <OTPInput
          textInputValue={otpNumber}
          pinCount={4}
          onChangeText={otpNumber => setOtpNumber(otpNumber)}
          underlineStyleBase={styles.underlineStyleBase}
          underlineStyleHighLighted={[styles.underlineStyleHighLighted]}
          handleVerifyOtp={otpNumber => {
            handleVerifyOtp(otpNumber);
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
      {/* marginVertical: Metrics.screenHeight * 0.1  */}
      <Image style={styles.logo} source={transparent_logo} />
      <View style={styles.subContainer}>
        <HeadingText
          text={AuthString.OTP.heading}
        />
        <Text style={styles.text}>{!!params?.isLoggedIn ?
          "Please enter verification code that was sent to your mobile number" :
          "Please enter verification code that was sent to your mobile number"}
        </Text>
        {!!params?.isLoggedIn && <Text style={
          {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.sixteen,
            color: Colors.primaryBtn,
          }
        }>
          34*-***-**81
        </Text>}

        {renderOtpInput()}

        {!!params?.isLoggedIn && <Text style={
          {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.sixteen,
            color: Colors.greyContent,
            marginTop: Metrics.ratio(20),
            textAlign: "center",
            lineHeight: Metrics.ratio(20)
          }
        }>
          if you not received OTP tap on resend button click
        </Text>}
        <Button
          customBtnStyle={{ width: '100%' }}
          btnText={AuthString.ButtonText.next}
          onPress={() => handleNavigate()}
        />


      </View>

      {/* </ImageBackground> */}
    </ImageBackground>
  );
};


OTP.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.bool
  }).isRequired
};


export default OTP;
