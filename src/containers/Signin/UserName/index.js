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
import { useDispatch } from 'react-redux';

import styles from './styles';
import { Images, Colors, Metrics, Fonts} from '../../../theme';
import {  CustomTextInput, Button } from '../../../components';
import { AuthString } from "../../../constant/stringConstants";
import {bg_half, background, transparent_logo} from "../../../assets/images";

const UserNickName = (props) => {
  const dispatch = useDispatch();

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
          }>{AuthString.Signin.userGreeting}</Text>
           <View style = {{width: "100%"}}>
            <Text style = {
              {
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.sixteen,
              color: Colors.secondaryBtnText,
              marginTop: Metrics.ratio(20),
            }
            }>{AuthString.UserName.heading}</Text>
           </View>
            <CustomTextInput
                placeholderTextColor = {Colors.placeholderContent}
                customContainerStyle = {{
                  marginVertical: Metrics.ratio(10),
                  width: '100%'
                }}
                // TextInputPaddingStyle={styles.TextInputPaddingStyle}
                // returnKeyType="next"
                // refrence={createRef.currentPasswordInputRef}
                enablesReturnKeyAutomaticallly={true}
                placeholder={AuthString.placeholder.enterNickName}
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
                btnText = {AuthString.ButtonText.create}
              />
        </View>
      
      </ImageBackground>
    </ImageBackground>
  );
};

export default UserNickName;
