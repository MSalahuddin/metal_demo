import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import { Metrics, Colors, Images } from '../../theme';

class Header extends Component {
  static propTypes = {
    headerBgColor: PropTypes.string,
    isDropShadow: PropTypes.bool,
    isLeftIconImg: PropTypes.bool,
    leftIcon: PropTypes.string,
    leftIconColor: PropTypes.string,
    leftBtnPress: PropTypes.func,
    leftIconStyle: PropTypes.object,
    leftIconCircleStyle: PropTypes.object,
    leftIconSize: PropTypes.number,
    headerLogo: PropTypes.string,
    headerLogoStyle: PropTypes.object,
    headerText: PropTypes.string,
    headerTextStyle: PropTypes.object,
    isRightIconImg: PropTypes.bool,
    rightIcon: PropTypes.string,
    rightIconColor: PropTypes.string,
    rightBtnPress: PropTypes.func,
    rightIconStyle: PropTypes.object,
    rightIconSize: PropTypes.number,
    rightText: PropTypes.string,
    rightTextStyle: PropTypes.object,
    isSearchBar: PropTypes.bool,
    searchBarStyle: PropTypes.object,
    searchBarTextInputStyle: PropTypes.object,
    searchPlaceholder: PropTypes.string,
    searchValue: PropTypes.string,
    onChangeSearchText: PropTypes.func,
    rightSecBtnPress: PropTypes.func,
    rightSecIconStyle: PropTypes.object,
    rightSecText: PropTypes.string,
    rightSecIcon: PropTypes.string,
    isRightSecIconImg: PropTypes.bool,
    rightSecIconSize: PropTypes.number,
    rightSecIconColor: PropTypes.string,
  };
  static defaultProps = {
    headerBgColor: '',
    isDropShadow: true,
    isLeftIconImg: false,
    leftIcon: undefined,
    leftBtnPress: undefined,
    leftIconStyle: undefined,
    leftIconCircleStyle: undefined,
    leftIconSize: undefined,
    headerLogo: '',
    headerLogoStyle: undefined,
    headerText: '',
    headerTextStyle: undefined,
    isRightIconImg: false,
    rightIcon: undefined,
    rightBtnPress: undefined,
    rightIconStyle: undefined,
    rightIconSize: undefined,
    rightText: '',
    isSearchBar: false,
    searchBarStyle: undefined,
    searchBarTextInputStyle: undefined,
    searchPlaceholder: 'Search',
    searchValue: '',
    onChangeSearchText: undefined,
    rightSecBtnPress: undefined,
    rightSecIconStyle: undefined,
    rightSecText: '',
    rightSecIcon: undefined,
    isRightSecIconImg: false,
    rightSecIconSize: undefined,
    rightSecIconColor: undefined,
  };

  render() {
    const {
      headerBgColor,
      isDropShadow,
      isLeftIconImg,
      leftIcon,
      leftIconColor,
      leftBtnPress,
      leftIconStyle,
      leftIconCircleStyle,
      leftIconSize,
      headerLogo,
      headerLogoStyle,
      headerText,
      headerTextStyle,
      isRightIconImg,
      rightIcon,
      rightIconColor,
      rightIconStyle,
      rightBtnPress,
      rightIconSize,
      rightText,
      isSearchBar,
      searchBarStyle,
      searchBarTextInputStyle,
      searchPlaceholder,
      searchValue,
      onChangeSearchText,
      rightSecBtnPress,
      rightSecIconStyle,
      rightSecText,
      rightSecIcon,
      isRightSecIconImg,
      rightSecIconSize,
      rightSecIconColor,
      rightTextStyle,
    } = this.props;
    const { route } = this.props;
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: headerBgColor },
          isDropShadow ? styles.dropShadow : null,
        ]}>
        <TouchableOpacity
          style={[styles.TouchableMenu, leftIconStyle]}
          onPress={leftBtnPress}>
          {leftIcon && isLeftIconImg ? (
            <View style={(styles.backarrowView, leftIconCircleStyle)}>
              <Image
                source={leftIcon}
                style={[styles.iconImage]}
                resizeMode={'contain'}
              />
            </View>
          ) : (
            <Icon
              size={leftIconSize ? leftIconSize : Metrics.ratio(28)}
              color={leftIconColor ? leftIconColor : Colors.Dove_Gray}
              name={leftIcon}
            />
          )}
        </TouchableOpacity>
        {/* {headerText || headerLogo ? ( */}
        <View style={[styles.centerView]}>
          {headerLogo ? (
            <Image
              source={headerLogo}
              style={[styles.headerLogo, headerLogoStyle]}
              resizeMode={'contain'}
            />
          ) : null}
          <Text numberOfLines={1} style={[styles.headerText, headerTextStyle]}>
            {headerText}
          </Text>
        </View>
        {route?.name == 'MyProfile' ? (
          <View style={styles.EditMainView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditProfile')}
              style={styles.editView}>
              <Image
                resizeMode="contain"
                style={styles.imageEdit}
                source={Images.Edit}
              />
              <Text style={styles.Edit}>Edit</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {/* ) : null} */}
        {isSearchBar ? (
          <View style={[styles.centerView]}>
            <View style={[styles.searchBarView, searchBarStyle]}>
              <Icon
                name={'search'}
                color={Colors.Dove_Gray}
                size={Metrics.ratio(23)}
              />
              <TextInput
                style={[styles.searchBarTextInput, searchBarTextInputStyle]}
                onChangeText={onChangeSearchText}
                placeholder={searchPlaceholder}
                placeholderTextColor={Colors.Dove_Gray}
                value={searchValue}
              />
            </View>
          </View>
        ) : null}
        <TouchableOpacity
          onPress={rightBtnPress}
          style={[styles.TouchableMenu, rightIconStyle]}>
          {rightIcon && isRightIconImg ? (
            <Image
              source={rightIcon}
              style={[styles.iconImage]}
              resizeMode={'contain'}
            />
          ) : (
            <Icon
              size={rightIconSize ? rightIconSize : Metrics.ratio(28)}
              color={rightIconColor ? rightIconColor : Colors.Dove_Gray}
              name={rightIcon}
            />
          )}
          {rightText ? (
            <Text style={{ ...styles.rightText, ...rightTextStyle }}>{rightText}</Text>
          ) : null}
        </TouchableOpacity>
        {rightSecIcon ? (
          <TouchableOpacity
            onPress={rightSecBtnPress}
            style={[styles.TouchableMenu, rightSecIconStyle]}>
            {rightSecText ? (
              <Text style={styles.rightText}>{rightSecText}</Text>
            ) : null}
            {rightSecIcon && isRightSecIconImg ? (
              <Image
                source={rightSecIcon}
                style={[styles.iconImage]}
                resizeMode={'contain'}
              />
            ) : (
              <Icon
                size={rightSecIconSize ? rightSecIconSize : Metrics.ratio(28)}
                color={rightSecIconColor ? rightSecIconColor : Colors.Dove_Gray}
                name={rightSecIcon}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

export default Header;
