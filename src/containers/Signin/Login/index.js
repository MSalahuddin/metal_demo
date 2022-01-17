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

import styles from './styles';
import { Colors, Metrics, Fonts} from '../../../theme';
import { CustomTextInput, Button, Logo, OTPInput, EnterYourPassword } from '../../../components';
import { AuthString } from "../../../constant/stringConstants";
import { login_bg, transparent_logo, avatar, fingerprint, transparent_fingure } from "../../../assets/images";
import {SCREENS} from "../../../constant/constant"
let errors = {
  emailErr: 'Invalid email address.',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
};

const Login = (props) => {
  const [pin, setPin] = useState('');


  const createPin = async pin => {
    handleNavigate()
  };

  // handle navigation
  const handleNavigate = () =>{
    navigation.navigate(SCREENS.CREATE_USER_NAME)
  };

  const renderPinInput = () => {
    return(
      <OTPInput
                textInputValue={pin}
                pinCount = {4}
                onChangeText={pin => setPin(pin)}
                underlineStyleBase={styles.underlineStyleBase}
                underlineStyleHighLighted={[styles.underlineStyleHighLighted]}
                handleVerifyOtp={pin => {
                  createPin(pin);
                }}
      />
    )
  }

  return (
      <>
      <ImageBackground
        style={styles.container}
        source={login_bg}>
        {/* <ImageBackground
          blurRadius={3}
          style={styles.image}
          source={bg_half}
        > */}
          <Image style = {{
              width: Metrics.ratio(200),
              height: Metrics.ratio(60),
              bottom: Metrics.ratio(60),
          }} source={transparent_logo}/>
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
            <View style = {{
              position: 'absolute',
              top: Metrics.ratio(-50),
              borderRadius: Metrics.ratio(40),
              borderColor: Colors.white,
              borderWidth: Metrics.ratio(4)
            }}>
              <Image source={avatar}/>
            </View>
            <Text style = {
              {
                fontFamily: Fonts.type.RobotoRegular,
                fontSize: Fonts.size.fourteen,
                color: Colors.placeholderContent,
                marginTop: Metrics.ratio(40)
              }
            }>Lola</Text>
            {renderPinInput()}
            <Button
              customBtnStyle={{width: "100%",}}
              leftIcon = {transparent_fingure}
              btnText = {AuthString.ButtonText.login}/>
            <Text style = {
              {
                fontFamily: Fonts.type.RobotoRegular,
                fontSize: Fonts.size.fourteen,
                color: Colors.primaryBtn,
                marginTop: Metrics.ratio(20)
              }
            }>{AuthString.Signin.forgotPassword}</Text>
            <Button
              customBtnStyle = {{
                width: "100%",marginVertical: Metrics.ratio(20),
                backgroundColor: Colors.secondaryBtn
              }}
              textStyle = {{color: Colors.secondaryBtnText}}
              btnText = {AuthString.Signin.loginWithOtherAccount}/>
          </View>

        {/* </ImageBackground>   */}
      </ImageBackground>
       <EnterYourPassword />
      </>
  );
};

export default Login;
