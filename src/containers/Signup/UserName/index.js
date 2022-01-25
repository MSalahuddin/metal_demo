// @flow
import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { Images, Colors, Metrics, Fonts } from '../../../theme';
import { CustomTextInput, Button } from '../../../components';
import { AuthString } from "../../../constant/stringConstants";
import { login_bg, background, transparent_logo } from "../../../assets/images";
import { SCREENS } from "../../../constant/constant";
import { HeadingText } from "../Resources";
const CreateUserName = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("")

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
      <Image style={styles.logo} 
        source={transparent_logo} />

      <View style={styles.subContainer}>
        <HeadingText
          text={AuthString.Signin.userGreeting}
        />

        <View style={{ width: "100%", marginTop: Metrics.ratio(5) }}>
          <Text style={styles.text}>{AuthString.UserName.heading}</Text>
        </View>
        <CustomTextInput
          placeholderTextColor={Colors.greyContent}
          customContainerStyle={{
            marginVertical: Metrics.ratio(20),
            width: '100%',
          }}
          // TextInputPaddingStyle={styles.TextInputPaddingStyle}
          // returnKeyType="next"
          // refrence={createRef.currentPasswordInputRef}
          enablesReturnKeyAutomaticallly={true}
          placeholder={AuthString.placeholder.enterNickName}
          editable={true}
          value={name}
          onChangeInput={(value) => setName(value)}
        // onSubmitRef={createRef.newPasswordInputRef}
        // onSubmit={(onSubmitRef) => {
        //   onSubmit(onSubmitRef);
        // }}
        // emailError={currentPasswordError}
        />
        <Button
          customBtnStyle={{ width: '100%', marginBottom: Metrics.ratio(35) }}
          btnText={AuthString.ButtonText.next}
          onPress={() => { navigation.navigate(SCREENS.PHONE_NO) }}
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
