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
import { Images, Colors, Metrics, Fonts} from '../../../theme';
import {  CustomTextInput, Button, Logo, Form } from '../../../components';
import { request as login_request } from '../../../redux/actions/Login';
import { AuthString } from "../../constant/stringConstants";
import {bg_half, background, transparent_logo, avatar, fingerprint, transparent_fingure} from "../../../assets/images";
let errors = {
  emailErr: 'Invalid email address.',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
};

const OTP = (props) => {
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
            textAlign: "center"
           }
          }>Please enter verification code that was sent to your mobile number</Text>
            <CustomTextInput
                inputRightIcon={fingerprint}
                placeholderTextColor = {Colors.placeholderContent}
                customContainerStyle = {{
                  marginVertical: Metrics.ratio(15),
                  width: '100%'
                }}
                // TextInputPaddingStyle={styles.TextInputPaddingStyle}
                // returnKeyType="next"
                // refrence={createRef.currentPasswordInputRef}
                enablesReturnKeyAutomaticallly={true}
                placeholder={'Enter your Pin'}
                editable={true}
                // value={currentPassword}
                // onChangeInput={(value) => setCurrentPassword(value)}
                // onSubmitRef={createRef.newPasswordInputRef}
                // onSubmit={(onSubmitRef) => {
                //   onSubmit(onSubmitRef);
                // }}
                // emailError={currentPasswordError}
              />
              <Button 
                customBtnStyle = {{width: '100%', marginBottom: Metrics.ratio(35)}}
                btnText = {"RESEND CODE"}
              />
        </View>
      
      </ImageBackground>
    </ImageBackground>
  );
};

export default OTP;
