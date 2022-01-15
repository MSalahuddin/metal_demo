// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
// import {Text} from '../index';
import styles from './styles';
import { Colors, Fonts } from "../../theme";

export default class CustomTextInput extends React.Component {
  // state = {secureentry:"true" }
  constructor(props) {
    super(props);
    this.state = {
      sec: props.secureTextEntry,
    };
  }

  static propTypes = {
    returnKeyType: PropTypes.string,
    isEditable: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    topLabelText: PropTypes.string,
    onChangeInput: PropTypes.func,
    emailError: PropTypes.string,
    refrence: PropTypes.object,
    onSubmitRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onSubmit: PropTypes.func,
    enablesReturnKeyAutomaticallly: PropTypes.bool,
    inputLeftIcon: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    customInputStyle: PropTypes.object,
    TextInputPaddingStyle: PropTypes.object,
    CustomTextInputStyle: PropTypes.object,
    underlineColor: PropTypes.string,
    fontStyle: PropTypes.object,
    customContainerStyle: PropTypes.object,
    placeholderTextColor: PropTypes.string,
    keyboardType: PropTypes.string
  };

  static defaultProps = {
    returnKeyType: undefined,
    isEditable: undefined,
    value: undefined,
    placeholder: undefined,
    topLabelText: undefined,
    onChangeInput: undefined,
    emailError: undefined,
    refrence: undefined,
    onSubmitRef: undefined,
    onSubmit: undefined,
    enablesReturnKeyAutomaticallly: undefined,
    inputLeftIcon: undefined,
    secureTextEntry: undefined,
    customInputStyle: undefined,
    TextInputPaddingStyle: undefined,
    CustomTextInputStyle: undefined,
    underlineColor: Colors.underlineColor,
    customContainerStyle: undefined,
    placeholderTextColor: undefined,
    keyboardType: undefined
  };

  render() {
    let {
      refrence,
      returnKeyType,
      placeholder,
      topLabelText,
      isEditable,
      value,
      onChangeInput,
      emailError,
      onSubmitRef,
      onSubmit,
      enablesReturnKeyAutomaticallly,
      inputLeftIcon,
      inputRightIcon,
      inputRightHideIcon,
      customInputStyle,
      TextInputPaddingStyle,
      customContainerStyle,
      placeholderTextColor,
      keyboardType,
      // CustomTextInputStyle,
      secureTextEntry,
    } = this.props;

    return (
      <View style={customContainerStyle}>
        <View style={[styles.InputView, customInputStyle]}>
          {inputLeftIcon && (
            <Image
              style={styles.inputIcon}
              resizeMode="contain"
              source={inputLeftIcon}
            />
          
          )}
          <TextInput
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={this.state.sec}
            returnKeyType={returnKeyType}
            enablesReturnKeyAutomaticallly={enablesReturnKeyAutomaticallly}
            style={[styles.textInputStyle, TextInputPaddingStyle]}
            placeholder={placeholder}
            editable={isEditable}
            ref={refrence}
            value={value}
            autoCapitalize={'none'}
            onChangeText={value => onChangeInput(value)}
            underlineColorAndroid={"black"}
            onSubmitEditing={() => {
              onSubmit(onSubmitRef);
            }}
            underlineColorAndroid="transparent"
            keyboardType={keyboardType}
          />

          <Image
            style={styles.rightIcon}
            resizeMode="contain"
            source={
              inputRightIcon
            }
          />
        </View>
        <Text style={styles.errormsg}> {emailError}</Text>
      </View>
    );
  }
}
