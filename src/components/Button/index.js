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
    onPress
  } = props;

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.btnContainer, customBtnStyle]}>
      <View style = {styles.leftIconContainer}>
        {leftIcon && (
          <Image
            style={styles.leftIcon}
            resizeMode="contain"
            source={leftIcon}
          />
        )}
      </View>
      <Text style = {[styles.textStyle, textStyle]}>{btnText}</Text>
      <View style = {styles.rightIconContainer}>
        {rightIcon && (
          <Image
            style={styles.rightIcon}
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
  onPress: undefined
};

Button.propTypes = {
  customBtnStyle: PropTypes.object,
  leftIcon: PropTypes.string,
  btnText: PropTypes.string,
  textStyle: PropTypes.object,
  rightIcon: PropTypes.object,
  onPress: PropTypes.func
};

export default Button;
