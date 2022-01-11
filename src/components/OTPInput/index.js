import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import styles from './styles';

const OTPInput = (props) => {
  const { 
    textInputValue,
    onChangeText,
    handleVerifyOtp,
    underlineStyleBase,
    underlineStyleHighLighted,
    keyboardType,
    pinCount
   } = props;

  return (
      <View>
       <OTPInputView
            style={styles.container}
            pinCount={pinCount}
            code={textInputValue}
            onCodeChanged={onChangeText}
            autoFocusOnLoad = {false}
            codeInputFieldStyle={underlineStyleBase}
            codeInputHighlightStyle={underlineStyleHighLighted}
            onCodeFilled={handleVerifyOtp}
            keyboardType = {keyboardType}
          />
      </View>
    );
}

OTPInput.defaultProps = {
  onChangeText: undefined,
  textInputValue: '',
  textInputStyle: undefined,
  handleVerifyOtp: undefined,
  underlineStyleBase: undefined,
  underlineStyleHighLighted: undefined,
  keyboardType: undefined,
  pinCount: undefined
};

OTPInput.propTypes = {
  textInputStyle: PropTypes.object,
  onChangeText: PropTypes.func,
  handleVerifyOtp: PropTypes.func,
  textInputValue: PropTypes.string,
  underlineStyleBase: PropTypes.object,
  underlineStyleHighLighted: PropTypes.object,
  keyboardType: PropTypes.string,
  pinCount: PropTypes.number
};


export default OTPInput;
