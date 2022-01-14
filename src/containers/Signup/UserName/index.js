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
import {  CustomTextInput, Button, Logo, Form } from '../../../components';
import { AuthString } from "../../../constant/stringConstants";
import {bg_half, background, transparent_logo} from "../../../assets/images";
import { SCREENS } from "../../../constant/constant";
let errors = {
  emailErr: 'Invalid email address.',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
};

const CreateUserName = ({navigation}) => {
  const [nickName, setNickName] = useState(null)
  const dispatch = useDispatch();

  const loginResponse = useSelector((state) => state.login);

  // on submit phone no
  const onSubmit = () => {
    handleNavigate()
  };
  // handle navigation
  const handleNavigate = () =>{
    navigation.navigate(SCREENS.ONBOARDING)
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
          }>{AuthString.UserName.heading}</Text>
           <Text style = {
            {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.eighteen,
            color: Colors.greyContent,
            marginTop: Metrics.ratio(20),
            textAlign: "center",
            lineHeight: Metrics.ratio(20)
           }
          }>{AuthString.UserName.enterName}</Text>
            <CustomTextInput
                placeholderTextColor = {Colors.greyContent}
                customContainerStyle = {{
                  marginVertical: Metrics.ratio(15),
                  width: '100%'
                }}
                // TextInputPaddingStyle={styles.TextInputPaddingStyle}
                returnKeyType="done"
                // refrence={createRef.currentPasswordInputRef}
                enablesReturnKeyAutomaticallly={true}
                placeholder={AuthString.placeholder.nickName}
                editable={true}
                value={nickName}
                onChangeInput={(value) => setNickName(value)}
                // onSubmitRef={createRef.newPasswordInputRef}
                onSubmit={() => {
                  onSubmit();
                }}
                // emailError={currentPasswordError}
              />
              <Button 
                customBtnStyle = {{width: '100%', marginBottom: Metrics.ratio(35)}}
                btnText = {AuthString.ButtonText.create}
                onPress={() => handleNavigate()}
              />
        </View>
      
      </ImageBackground>
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
