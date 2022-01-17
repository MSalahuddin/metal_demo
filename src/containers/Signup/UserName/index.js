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
import PropTypes from 'prop-types';
import styles from './styles';
import { Images, Colors, Metrics, Fonts} from '../../../theme';
import {  CustomTextInput, Button } from '../../../components';
import { AuthString } from "../../../constant/stringConstants";
import {login_bg, background, transparent_logo} from "../../../assets/images";
import {SCREENS} from "../../../constant/constant";
const CreateUserName = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <ImageBackground
    style={styles.container}
    source={login_bg}>
      {/* <ImageBackground
          blurRadius={3}
          style={styles.image}
          source={bg_half}
      > */}
      {/* marginVertical: Metrics.screenHeight * 0.1 */}
        <Image style = {{
          width: Metrics.ratio(200),
          height: Metrics.ratio(60),
          bottom: Metrics.ratio(60),
        }} 
        // resizeMethod = 'auto' 
        // resizeMode= 'contain' 
        source={transparent_logo}/>
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
            fontSize: Fonts.size.xLarge,
            color: Colors.placeholderContent,
            marginTop: Metrics.ratio(20)
           }
          }>{AuthString.Signin.userGreeting}</Text>
           <View style = {{width: "100%"}}>
            <Text style = {
              {
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.sixteen,
              color: Colors.mantle_grey,
              marginTop: Metrics.ratio(20),
            }
            }>{AuthString.UserName.heading}</Text>
           </View>
            <CustomTextInput
                placeholderTextColor = {Colors.greyContent}
                customContainerStyle = {{
                  // marginVertical: Metrics.ratio(10),
                  width: '100%',
                  
                  // backgroundColor: "red"
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
                btnText = {AuthString.ButtonText.next}
                onPress={() => {navigation.navigate(SCREENS.ENTER_PIN)}}
              />
        </View>
      {/* </ImageBackground> */}
    </ImageBackground>
  );
};

CreateUserName.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.bool
  }).isRequired
};

export default CreateUserName;
