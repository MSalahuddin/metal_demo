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
import {  Colors, Metrics, Fonts} from '../../../theme';
import {  CustomTextInput, Button, Logo, Form } from '../../../components';
import { AuthString } from "../../../constant/stringConstants";
import {bg_half, background, transparent_logo, avatar, fingerprint, transparent_fingure} from "../../../assets/images";

let errors = {
  emailErr: 'Invalid email address.',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
};

const EnterPin = (props) => {
  const dispatch = useDispatch();

  const loginResponse = useSelector((state) => state.login);

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
          }>NAZLIHAN GUNAYLER</Text>
            <CustomTextInput
                inputRightIcon={fingerprint}
                placeholderTextColor = {Colors.placeholderContent}
                customContainerStyle = {{
                  marginVertical: Metrics.ratio(15),
                  width: "100%",
                }}
                // TextInputPaddingStyle={styles.TextInputPaddingStyle}
                // returnKeyType="next"
                // refrence={createRef.currentPasswordInputRef}
                enablesReturnKeyAutomaticallly={true}
                placeholder={AuthString.placeholder.pin}
                editable={true}
                // value={currentPassword}
                // onChangeInput={(value) => setCurrentPassword(value)}
                // onSubmitRef={createRef.newPasswordInputRef}
                // onSubmit={(onSubmitRef) => {
                //   onSubmit(onSubmitRef);
                // }}
                // emailError={currentPasswordError}
              />
              <Button customBtnStyle={{width: "100%", marginVertical: Metrics.ratio(20)}} btnText = {AuthString.ButtonText.login}/>
             
              <Text style = {
                  {
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.fourteen,
                    color: Colors.primaryBtn,
                    marginTop: Metrics.ratio(20)
                  }
              }>{AuthString.Signin.forgotPassword}</Text>
           
               <Text style = {
                  {
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.fourteen,
                    color: Colors.secondaryBtnText,
                    marginVertical: Metrics.ratio(20)
                  }
              }>{AuthString.Signin.loginOtherId}</Text>
        </View>
      
      </ImageBackground>
    </ImageBackground>
  );
};

export default EnterPin;
