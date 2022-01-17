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
import { request as login_request } from '../../redux/actions/../Login';
import { AuthString } from "../../../constant/stringConstants";
import { login_bg, background, transparent_logo, avatar, fingerprint, transparent_fingure } from "../../../assets/images";
import { SCREENS } from "../../../constant/constant";
import {HeadingText} from "../Resources";
import { drawerMenuSwitched } from '../../../redux/actions/NavigationAction';

const CreatePin = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();


  const createPin = async pin => {
    handleNavigate()
  };


  // handle navigation
  const handleNavigate = () => {
    navigation.navigate(SCREENS.ENTER_PIN)
    // dispatch(drawerMenuSwitched("", SCREENS.HOME))
  };

  const renderPinInput = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <OTPInput
          textInputValue={pin}
          pinCount={4}
          onChangeText={pin => setPin(pin)}
          underlineStyleBase={styles.underlineStyleBase}
          underlineStyleHighLighted={[styles.underlineStyleHighLighted]}
          handleVerifyOtp={pin => {
            createPin(pin);
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
      {/* marginVertical: Metrics.screenHeight * 0.1 */}
      <Image style={{
        width: Metrics.ratio(200),
        height: Metrics.ratio(60),
        bottom: Metrics.ratio(60),
      }} source={transparent_logo} />
      <View style={{
        backgroundColor: Colors.white,
        width: Metrics.screenWidth * 0.85,
        height: Metrics.screenHeight * 0.41,
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
        <HeadingText
          text={AuthString.CreatePin.createYourPin}
        />

        <Text style={
          {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.sixteen,
            color: Colors.greyContent,
            marginTop: Metrics.ratio(30),
            textAlign: "center",
            lineHeight: Metrics.ratio(25)
          }
        }>{AuthString.CreatePin.desc}</Text>
        {renderPinInput()}

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

CreatePin.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.bool
  }).isRequired
};

export default CreatePin;
