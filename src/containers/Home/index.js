// @flow
import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { Images, Colors, Metrics, Fonts} from '../../theme';
import {  CarouselSlider, Button, Header } from '../../components';
import { request as login_request } from '../../redux/actions/Login';
import { commonString, home } from "../../constant/stringConstants";
import {
  avatar, 
  metal_icon, 
  send_money, 
  Invest_money, 
  avatar3, 
  avatar2, 
  banner,
  home_icon, 
  profile_icon,
  help_icon
} from "../../assets/images";



const Home = (props) => {
  const promoBannerOpacity = new Animated.Value(1);
  const [recentTransfer, setRecentTransfer] = useState([
    {name: "Ann-Marita", data: "Dec 15, 2021, 7:15 AM", amount: "$1,000.00", image: avatar3},
    {name: "Brooke Hogan", data: "Nov 16, 2021, 10:46 AM", amount: "$500.00", image: avatar2}
  ]);

  const onPromoCardPress = () => {
    Animated.timing(promoBannerOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
    }).start(() => {});//setIsPromoCardVisible(false), setUserGuidePromoCode(false)
  };

  const renderCarousel = (props) => {
    return(
      <View style = {styles.carouselContainer}>
        <Animated.View style={{ opacity: promoBannerOpacity }}>
          <CarouselSlider
            bannerImages = {[banner]}
          />
                          {/* <PromoCard
                              isClosable
                              data={gameRoomPromoData}
                              onClose={onPromoCardPress}
                              onPress={(i) => {
                                  setPromoIndex(i)
                                  openPromoInfo(OPEN_PROMO_LOCATIONS.GAME_ROOM_HEADER)
                              }}
                          /> */}
        </Animated.View>
      </View>
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
  
  const renderListItem = ({name, date, amount, image}) => {

    return(
      <View style = {{
        flexDirection: "row",
        paddingHorizontal: Metrics.ratio(20),
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingVertical: Metrics.ratio(10),
        borderBottomWidth: Metrics.ratio(1),
        borderBottomColor: Colors.grey,
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
              source={image}/>
          </View>
          <View style = {{marginLeft: Metrics.ratio(10)}}>
            <Text style = {
              {
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.sixteen,
              color: Colors.secondaryBtnText,
             }
            }>{name}</Text>
            <Text style = {
              {
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.fourteen,
              color: Colors.greyContent,
              marginTop: Metrics.ratio(3)
             }
            }>{date}</Text>
          </View>
          <View style = {{flexDirection: "row", marginLeft: "auto"}}>
            <Text style = {
              {
              fontFamily: Fonts.type.RobotoBold,
              fontSize: Fonts.size.sixteen,
              color: Colors.orange_text,
              marginTop: Metrics.ratio(3)
             }
            }>{amount}</Text>
            <Image/>
          </View>
      </View>
    );
  };

  const renderListTab = () => {
    return(
      <View style = {{backgroundColor: Colors.white,}}>
        {recentTransfer.map((data) => renderListItem(data)) }
        <TouchableOpacity style = {{
           alignItems: "center",
           marginVertical: Metrics.ratio(10)
        }}>
          <Text style = {{
            color: Colors.primaryBtn,
            fontSize: Fonts.size.thirteen,
            fontFamily: Fonts.type.RobotoRegular
          }}>
            {home.viewAll}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderBottom = () => {
    const tabs = [
      {icon: home_icon, name: "Home"},
      {icon: profile_icon, name: "Profile"},
      {icon: help_icon, name: "Help"},
    ];
    return(
      <View style = {{
        height: Metrics.screenHeight * 0.1,
        width: Metrics.screenWidth,
        backgroundColor: Colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: Metrics.screenWidth * 0.1,
        marginTop: "auto",
        borderTopLeftRadius: Metrics.ratio(10),
        borderTopRightRadius: Metrics.ratio(10),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.14,
        shadowRadius: 1.27,
        elevation: 3,
        }}>
          {tabs.map((item) => (
             <View style = {{alignItems: "center",}}>
              <Image 
              style = {{
                width: Metrics.ratio(25),
                height: Metrics.ratio(25),
              }}
              resizeMethod='auto' 
              resizeMode= 'contain' 
              source={item.icon}
              />
              <Text style = {{
                fontFamily: Fonts.type.RobotoRegular,
                fontSize: Fonts.size.fifteen,
                color: Colors.mantle_grey
                }}>{item.name}</Text>
           </View>
          ))}
      </View>
    )
  }

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
      {renderListTab()}
      {renderBottom()}
    </View>
  );
};

export default Home;
