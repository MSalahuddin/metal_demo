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
import { request as login_request } from '../../redux/actions/../Login';
import { AuthString } from "../../../constant/stringConstants";
import {bg_half, background, transparent_logo, avatar, fingerprint, transparent_fingure} from "../../../assets/images";
import {SCREENS} from "../../../constant/constant";

const CreatePin = ({navigation}) => {
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
          }>{AuthString.CreatePin.createYourPin}</Text>
           <Text style = {
            {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.sixteen,
            color: Colors.greyContent,
            marginTop: Metrics.ratio(20),
            textAlign: "center"
           }
          }>{AuthString.CreatePin.desc}</Text>
            {renderPinInput()}
          
              <Button 
                customBtnStyle = {{width: '100%', marginBottom: Metrics.ratio(35), marginTop: Metrics.ratio(15)}}
                btnText = {AuthString.ButtonText.create}
                onPress={() => handleNavigate()}
              />
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

CreatePin.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.bool
  }).isRequired
};

export default CreatePin;
