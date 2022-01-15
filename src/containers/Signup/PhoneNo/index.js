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
import {bg_half, background, transparent_logo } from "../../../assets/images";
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
           height: Metrics.screenHeight * 0.45,
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
          }>{AuthString.PhoneNo.letStart}</Text>
            {/* <CountryPickerModal/> */}
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
                btnText = {AuthString.ButtonText.continue}
                onPress={() => handleNavigate()}
              />
        </View>
      
      </ImageBackground>
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
