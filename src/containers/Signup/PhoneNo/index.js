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
import {  CustomTextInput, Button, CountryPickerModal } from '../../../components';
import { request as login_request } from '../../redux/actions/../Login';
import { AuthString } from "../../../constant/stringConstants";
import {login_bg, background, transparent_logo, united_states, down_arrow } from "../../../assets/images";
import {
  SCREENS
} from "../../../constant/constant";

const PhoneNo = ({navigation}) => {
  const [phoneNo, setPhoneNo] = useState("");
  
  // on submit phone no
  const onSubmit = () => {
    handleNavigate()
  };

  // handle navigation
  const handleNavigate = () =>{
    navigation.navigate(SCREENS.OTP)
  };


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
        }} source={transparent_logo}/>
        <View style = {{
           backgroundColor: Colors.white,
           width: Metrics.screenWidth * 0.85,
          //  height: Metrics.screenHeight * 0.45,
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
            fontSize: Fonts.size.large,
            color: Colors.placeholderContent,
            marginTop: Metrics.ratio(30)
           }
          }>{AuthString.PhoneNo.letStart}</Text>
            {/* <CountryPickerModal/> */}
            <View style = {{width: "100%", marginTop: Metrics.ratio(30)}}>
              <View style = {{
                // height: Metrics.ratio(40),
                paddingBottom: Metrics.ratio(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: Colors.underlineColor,
              }}>
               <View style = {{flexDirection: "row"}}>
                <Text style = {{
                    fontFamily: Fonts.type.RobotoRegular,
                    fontSize: Fonts.size.large,
                    color: Colors.greyContent,
                  }}>+1</Text> 
                  <Image style = {{
                    marginLeft: Metrics.ratio(10),
                    width: Metrics.ratio(30),
                    height: Metrics.ratio(20)
                    }} source={united_states}/>
                </View>
                <Image style = {{
                  marginLeft: Metrics.ratio(10),
                  }} source={down_arrow}/>
              </View>
            </View>
            <CustomTextInput
                placeholderTextColor = {Colors.greyContent}
                customContainerStyle = {{
                  marginVertical: Metrics.ratio(15),
                  width: '100%'
                }}
                // TextInputPaddingStyle={styles.TextInputPaddingStyle}
                // onSubmitRef={createRef.newPasswordInputRef}
                // refrence={createRef.currentPasswordInputRef}
                returnKeyType="done"
                enablesReturnKeyAutomaticallly={true}
                placeholder={AuthString.placeholder.mobileNo}
                editable={true}
                value={phoneNo}
                onChangeInput={(value) => setPhoneNo(value)}
                keyboardType = {'phone-pad'}
                onSubmit={() => {
                  onSubmit();
                }}
                // emailError={currentPasswordError}
              />
              <Button 
                customBtnStyle = {{width: '100%', }}
                btnText = {AuthString.ButtonText.next}
                onPress={() => handleNavigate()}
              />
        </View>
      
      {/* </ImageBackground> */}
    </ImageBackground>
  );
};

PhoneNo.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.bool
  }).isRequired
};


export default PhoneNo;
