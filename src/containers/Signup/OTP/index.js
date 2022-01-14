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
import { Images, Colors, Metrics, Fonts} from '../../../theme';
import {  CustomTextInput, Button, OTPInput } from '../../../components';
import { request as login_request } from '../../../redux/actions/Login';
import { AuthString } from "../../../constant/stringConstants";
import {bg_half, background, transparent_logo } from "../../../assets/images";
import {SCREENS} from "../../../constant/constant";

let errors = {
  emailErr: 'Invalid email address.',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
};

const OTP = ({navigation}) => {
  const dispatch = useDispatch();
  const [otpNumber, setOtpNumber] = useState('');

  const handleVerifyOtp = async otpNumber => {
    handleNavigate()
  };

  // handle navigation
  const handleNavigate = () =>{
    navigation.navigate(SCREENS.CREATE_PIN)
  };

  const renderOtpInput = () => {
    return(
      <OTPInput
                textInputValue={otpNumber}
                pinCount = {4}
                onChangeText={otpNumber => setOtpNumber(otpNumber)}
                underlineStyleBase={styles.underlineStyleBase}
                underlineStyleHighLighted={[styles.underlineStyleHighLighted]}
                handleVerifyOtp={otpNumber => {
                    handleVerifyOtp(otpNumber);
                }}
      />
    )
  }
  return (
    <ImageBackground
    style={styles.container}
    source={background}>
      <ImageBackground
          blurRadius={3}
          style={styles.image}
          source={bg_half}
      >
        <Image style = {{marginVertical: Metrics.screenHeight * 0.1}} source={transparent_logo}/>
        <View style = {{
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
          
          <Text style = {
            {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.eighteen,
            color: Colors.placeholderContent,
            marginTop: Metrics.ratio(20)
           }
          }>OTP</Text>
           <Text style = {
            {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.sixteen,
            color: Colors.greyContent,
            marginTop: Metrics.ratio(20),
            textAlign: "center",
            lineHeight: Metrics.ratio(20)
           }
          }>Please enter verification code that was sent to your mobile number</Text>
          {renderOtpInput()}
              <Button 
                customBtnStyle = {{width: '100%', marginBottom: Metrics.ratio(35), marginTop: Metrics.ratio(15)}}
                btnText = {AuthString.ButtonText.resendCode}
                onPress={() => handleNavigate()}
              />
        </View>
      
      </ImageBackground>
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
