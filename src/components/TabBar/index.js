import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { Colors, Metrics } from '../../theme';

const TabBar = (props) => {
    const {
      isActive,
      leftButtonPress,
      leftButtonText,
      rightButtonPress,
      rightButtonText,
      singleTabStyle
    } = props;

    return (
      <View style={[styles.container]}>
        {!singleTabStyle && <TouchableOpacity
          style={[
            styles.button,
            {
              borderBottomColor: isActive ? Colors.primary : Colors.homeText,
              borderBottomWidth: isActive ? Metrics.ratio(4) : Metrics.ratio(0),
            },
          ]}
          onPress={leftButtonPress}>
          <Text
            style={[
              styles.buttonText,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                textAlign: 'center',
                color: isActive ? Colors.homeText : Colors.primary,
              },
            ]}>
            {leftButtonText}
          </Text>
        </TouchableOpacity>}
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderBottomColor: !isActive ? Colors.primary : Colors.homeText,
              borderBottomWidth: !isActive ? Metrics.ratio(4) : Metrics.ratio(0),
            },
            singleTabStyle && { width: Metrics.screenWidth }
          ]}
          onPress={rightButtonPress}>
          <Text
            style={[
              styles.buttonText,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                textAlign: 'center',
                color: !isActive
                  ? Colors.homeText
                  : Colors.primary,
              },
            ]}>
            {rightButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

TabBar.defaultProps = {
  isActive: false,
  leftButtonPress: undefined,
  leftButtonText: '',
  rightButtonPress: undefined,
  rightButtonText: '',
  singleTabStyle: undefined
};

TabBar.propTypes = {
  isActive: PropTypes.bool,
  leftButtonPress: PropTypes.func,
  leftButtonText: PropTypes.string,
  rightButtonPress: PropTypes.func,
  rightButtonText: PropTypes.string,
  singleTabStyle: PropTypes.bool
};
export default TabBar;
