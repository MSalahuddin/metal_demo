// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = (props) => {

  const { 
    customBtnStyle,
    textStyle,
    leftIcon,
    btnText,
    rightIcon,
    onPress,
    customLeftIconContainer,
    customLeftIcon,
    customRightIcon,
    customRightIconContainer
  } = props;

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.btnContainer, customBtnStyle]}>
      <View style = {[styles.leftIconContainer, customLeftIconContainer]}>
        {leftIcon && (
          <Image
            style={[styles.leftIcon, customLeftIcon]}
            resizeMode="contain"
            source={leftIcon}
          />
        )}
      </View>
      <Text style = {[styles.textStyle, textStyle]}>{btnText}</Text>
      <View style = {[styles.rightIconContainer, customRightIconContainer]}>
        {rightIcon && (
          <Image
            style={[styles.rightIcon, customRightIcon]}
            resizeMode="contain"
            source={rightIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  customBtnStyle: undefined,
  leftIcon: undefined,
  btnText: undefined,
  textStyle: undefined,
  rightIcon: undefined,
  onPress: undefined,
  customLeftIconContainer: undefined,
  customLeftIcon: undefined,
  customRightIcon: undefined,
  customRightIconContainer: undefined
};

Button.propTypes = {
  customBtnStyle: PropTypes.object,
  leftIcon: PropTypes.string,
  btnText: PropTypes.string,
  textStyle: PropTypes.object,
  rightIcon: PropTypes.object,
  onPress: PropTypes.func,
  customLeftIconContainer: PropTypes.object,
  customLeftIcon: PropTypes.object,
  customRightIcon: PropTypes.object,
  customRightIconContainer: PropTypes.object,
};

export default Button;
