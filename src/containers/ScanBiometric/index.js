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
import { Images, Colors, Metrics, Fonts} from '../../theme';
import {  CustomTextInput, Button, Header } from '../../components';
import { drawerMenuSwitched } from '../../redux/actions/NavigationAction';
import { AuthString } from "../../constant/stringConstants";
import {background, scan_success} from "../../assets/images";
import {SCREENS} from "../../constant/constant";

const ScanBiometric = ({navigation}) => {
  const dispatch = useDispatch();

  const handleNavigation = () => {
    dispatch(drawerMenuSwitched("", SCREENS.HOME))
  }

  return (
    <ImageBackground
    style={styles.container}
    source={background}>
      <Header 
      headerText = {AuthString.ScanBiometric.scanFigerprint}
      headerTextStyle = {{color: Colors.secondaryBtnText, fontSize: Fonts.size.xLarge}}/>
        <Image style = {{
          width: Metrics.screenWidth * 0.7,
          height: Metrics.screenHeight * 0.3,
          marginVertical: Metrics.ratio(20)
        }} 
        resizeMethod='auto'
        resizeMode='contain'
        source={scan_success}/>
        <Text style = 
        {{
          fontFamily: Fonts.type.RobotoRegular,
          fontSize: Fonts.size.fourteen,
          color: Colors.secondaryBtnText,
          textAlign: "center",
          lineHeight: Metrics.ratio(18),
          marginHorizontal: Metrics.screenWidth * 0.07
        }}>
          {AuthString.ScanBiometric.description}
        </Text>
        <View style = {{
          marginTop: "auto",
          width: Metrics.screenWidth * 0.8,
          marginBottom: Metrics.screenHeight * 0.1
          }}>
          <Button 
            onPress={() =>  handleNavigation()}
            btnText = {AuthString.ButtonText.usePassword}
          />
          <Button 
            customBtnStyle = {{
              marginTop: Metrics.ratio(20),
              backgroundColor: Colors.secondaryBtn
            }} 
            textStyle = {{color: Colors.secondaryBtnText}}   
            btnText = {AuthString.ButtonText.cancel}
            onPress={() =>  handleNavigation()}
            />
        </View>
    </ImageBackground>
  );
};

ScanBiometric.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.bool
  }).isRequired
};

export default ScanBiometric;
