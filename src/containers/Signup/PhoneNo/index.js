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
import { CustomTextInput, Button, CountryPickerModal } from '../../../components';
import { request as login_request } from '../../redux/actions/../Login';
import { AuthString } from "../../../constant/stringConstants";
import { login_bg, background, transparent_logo, united_states, down_arrow } from "../../../assets/images";
import {
  SCREENS
} from "../../../constant/constant";
import { HeadingText } from "../Resources"

const PhoneNo = ({ navigation }) => {
  const [phoneNo, setPhoneNo] = useState("");

  // on submit phone no
  const onSubmit = () => {
    handleNavigate()
  };

  // handle navigation
  const handleNavigate = () => {
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
      <Image style={styles.logo} source={transparent_logo} />
      <View style={styles.subContainer}>

        <HeadingText
          text={AuthString.PhoneNo.letStart}
        />
        {/* <CountryPickerModal/> */}
        <View style={{ width: "100%", marginTop: Metrics.ratio(10), justifyContent: "center" }}>
          <View style={styles.selectCountry}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.countryCode}>+1</Text>
              <Image style={styles.countryFlag} source={united_states} />
            </View>
            <Image style={{
              marginLeft: Metrics.ratio(10),
            }} source={down_arrow} />
          </View>
        </View>
        <CustomTextInput
          placeholderTextColor={Colors.greyContent}
          customContainerStyle={{
            marginVertical: Metrics.ratio(15),
            width: '100%'
          }}
          returnKeyType="done"
          enablesReturnKeyAutomaticallly={true}
          placeholder={AuthString.placeholder.mobileNo}
          editable={true}
          value={phoneNo}
          onChangeInput={(value) => setPhoneNo(value)}
          keyboardType={'phone-pad'}
          onSubmit={() => {
            onSubmit();
          }}
        // emailError={currentPasswordError}
        />
        <Button
          customBtnStyle={{ width: '100%',}}
          btnText={AuthString.ButtonText.next}
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
