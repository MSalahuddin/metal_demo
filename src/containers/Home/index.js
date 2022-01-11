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

import styles from './styles';
import { Images, Colors, Metrics, Fonts} from '../../theme';
import {  CustomTextInput, Button, Header } from '../../components';
import { request as login_request } from '../../redux/actions/Login';
import { commonString, home } from "../../constant/stringConstants";
import {avatar, metal_icon, send_money, Invest_money, avatar3} from "../../assets/images";

const renderCarousel = (props) => {
  return(
    <View style = {styles.carouselContainer}></View>
  )
}

const renderSelection = (props) => {
  return(
    <View style ={{marginHorizontal: Metrics.screenWidth * 0.05}}>
       <Text style = 
        {{
          fontFamily: Fonts.type.RobotoRegular,
          fontSize: Fonts.size.eighteen,
          color: Colors.secondaryBtnText,
          marginTop: Metrics.ratio(10)
        }}>
          {home.wantToday}
        </Text>
        <View style = {{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: Metrics.ratio(20)
          }}>
          <TouchableOpacity style = {styles.selectButon}>
            <Image style = {{width: Metrics.ratio(27), height: Metrics.ratio(27)}} source={send_money}/> 
            <Text style = {
            {
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.fourteen,
              color: Colors.mantle_grey,
              marginTop: Metrics.ratio(8)
           }
          }>{home.sendMoney}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.selectButon}>
            <Image style = {{width: Metrics.ratio(27), height: Metrics.ratio(27)}} source={Invest_money}/> 
            <Text style = {
            {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.fourteen,
            color: Colors.mantle_grey,
            marginTop: Metrics.ratio(8)
           }
          }>{home.investMoney}</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const renderListContainer = (props) => {
  return(
    <View style = {{
      flexDirection: "row",
      paddingHorizontal: Metrics.ratio(20),
      alignItems: "center",
      backgroundColor: Colors.white,
      paddingVertical: Metrics.ratio(10)
      }}>
         <View style = {{
          width: Metrics.ratio(40),
          height: Metrics.ratio(40),
          }}
        >
          <Image 
            resizeMode= 'contain' 
            resizeMethod='auto' 
            style = {{
            width: Metrics.ratio(40),
            height: Metrics.ratio(40),
            }} 
            source={avatar3}/>
        </View>
        <View style = {{marginLeft: Metrics.ratio(10)}}>
          <Text style = {
            {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.sixteen,
            color: Colors.secondaryBtnText,
           }
          }>Ann-Marita</Text>
          <Text style = {
            {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.fourteen,
            color: Colors.greyContent,
            marginTop: Metrics.ratio(3)
           }
          }>Dec 15, 2021, 7:15 AM</Text>
        </View>
        <View style = {{flexDirection: "row"}}>
          <Text style = {
            {
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.fourteen,
            color: Colors.greyContent,
            marginTop: Metrics.ratio(3)
           }
          }>Dec 15, 2021, 7:15 AM</Text>
          <Image/>
        </View>
    </View>
  );
}

const Home = (props) => {

  return (
    <View style = {styles.container}>
      <View style = {{
        flexDirection: "row",
        marginTop: Metrics.ratio(30),
        height: Metrics.screenHeight * 0.095,
        alignItems: "center",
        marginHorizontal: Metrics.screenWidth * 0.05
      }}>
        <View style = {{
          width: Metrics.ratio(40),
          height: Metrics.ratio(40),
          }}
        >
          <Image 
            resizeMode= 'contain' 
            resizeMethod='auto' 
            style = {{
            width: Metrics.ratio(40),
            height: Metrics.ratio(40),
            }} 
            source={avatar}/>
        </View>
        <Text style = 
        {{
          fontFamily: Fonts.type.RobotoRegular,
          fontSize: Fonts.size.xLarge,
          color: Colors.secondaryBtnText,
          marginHorizontal: Metrics.ratio(10)
        }}>
          {commonString.hi} Lola!
        </Text>
        <View style = {styles.metalsContainer}>
            <Image source={metal_icon}/>
            <Text style = {styles.tokenCount}>150 Metals</Text>
        </View>
      </View>
      {renderCarousel()}
      {renderSelection()}
      {renderListContainer()}
    </View>
  );
};

export default Home;
