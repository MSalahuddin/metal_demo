// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = (props) => {

  const { 
    customBtnStyle,
    leftIcon,
    btnText 
  } = props;

  return (
    <View style={[styles.btnContainer, customBtnStyle]}>
      {leftIcon && (
        <Image
          style={styles.leftIcon}
          resizeMode="contain"
          source={inputLeftIcon}
        />
      )}
      <Text>{btnText}</Text>
    </View>
  );
};

Button.defaultProps = {
  customBtnStyle: undefined,
  leftIcon: undefined,
  btnText: undefined
};

Button.propTypes = {
  customBtnStyle: PropTypes.object,
  leftIcon: PropTypes.string,
  btnText: PropTypes.string
};

export default Button;
