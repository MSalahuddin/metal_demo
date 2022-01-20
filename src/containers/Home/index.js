// @flow
import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  ImageBackground,
  StatusBar
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { Images, Colors, Metrics, Fonts } from '../../theme';
import { CarouselSlider, CustomTabView, Header } from '../../components';
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
  help_icon,
  home_selected,
  metal_wihte_icon,
  in_process_icon,
  check_icon
} from "../../assets/images";
import { SCREENS } from '../../constant/constant';


const RenderListTab = ({ data, handleNavigation }) => {
  const renderListItem = ({ name, date, amount, image, isCompleted }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          paddingHorizontal: Metrics.ratio(20),
          alignItems: "center",
          backgroundColor: Colors.white,
          paddingVertical: Metrics.ratio(10),
          borderBottomWidth: Metrics.ratio(1),
          borderBottomColor: Colors.grey,
        }}
        onPress={() => { handleNavigation() }}
      >
        <View style={{
          width: Metrics.ratio(40),
          height: Metrics.ratio(40),
        }}
        >
          <Image
            resizeMode='contain'
            resizeMethod='auto'
            style={{
              width: Metrics.ratio(40),
              height: Metrics.ratio(40),
            }}
            source={image} />
        </View>
        <View style={{ marginLeft: Metrics.ratio(10) }}>
          <Text style={
            {
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.sixteen,
              color: Colors.secondaryBtnText,
            }
          }>{name}</Text>
          <Text style={
            {
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.fourteen,
              color: Colors.placeholderContentWithOpacity,
              marginTop: Metrics.ratio(3),
            }
          }>{date}</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: "auto", alignItems: "center" }}>
          <Text style={
            {
              fontFamily: Fonts.type.RobotoBold,
              fontSize: Fonts.size.sixteen,
              color: isCompleted ? Colors.green_text : Colors.orange_text,
              marginTop: Metrics.ratio(3)
            }
          }>{amount}</Text>
          <Image style={{
            marginLeft: Metrics.ratio(5),
            marginTop: Metrics.ratio(5)
          }}
            source={isCompleted ? check_icon : in_process_icon} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: Colors.white, }}>
      {data.map((data) => renderListItem(data))}
      <TouchableOpacity style={{
        alignItems: "center",
        marginVertical: Metrics.ratio(10)
      }}>
        <Text style={{
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

const Home = ({ navigation }) => {
  const promoBannerOpacity = new Animated.Value(1);
  const [recentTransfer, setRecentTransfer] = useState([
    { name: "Ann-Marita", date: "Dec 15, 2021, 7:15 AM", amount: "$1,000.00", image: avatar3, isCompleted: false },
    { name: "Brooke Hogan", date: "Nov 16, 2021, 10:46 AM", amount: "$500.00", image: avatar2, isCompleted: true }
  ]);
  const [routeIndex, setRouteIndex] = useState(0);
  const route = {
    index: routeIndex,
    routes: [
      { key: "RecentTransfer", title: home.recentTransfer },
      { key: "Invesment", title: home.investMoney },
    ],
  };

  const onPromoCardPress = () => {
    Animated.timing(promoBannerOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => { });//setIsPromoCardVisible(false), setUserGuidePromoCode(false)
  };

  // handle navigation
  const handleNavigate = () => {
    navigation.navigate(SCREENS.BENEFICIARIES)
  };


  const renderCarousel = () => {
    return (
      <ImageBackground source={banner} style={styles.carouselContainer}>
        <View style={{
          flexDirection: "row",
          marginTop: Metrics.ratio(30),
          height: Metrics.screenHeight * 0.095,
          alignItems: "center",
          marginHorizontal: Metrics.screenWidth * 0.05
        }}>
          <View style={{
            width: Metrics.ratio(40),
            height: Metrics.ratio(40),
          }}
          >
            <Image
              resizeMode='contain'
              resizeMethod='auto'
              style={{
                width: Metrics.ratio(40),
                height: Metrics.ratio(40),
              }}
              source={avatar} />
          </View>
          <Text style=
            {{
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.eighteen,
              color: Colors.secondaryBtnText,
              marginHorizontal: Metrics.ratio(10)
            }}>
            {commonString.hi} Lola!
          </Text>
          <View style={styles.metalsContainer}>
            <Image source={metal_wihte_icon} />
            <Text style={styles.tokenCount}>150 Metals</Text>
          </View>
        </View>
      </ImageBackground>
    )
  };

  const renderSelection = () => {
    return (
      <View style={{ marginHorizontal: Metrics.screenWidth * 0.05, }}>
        <Text style=
          {{
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.eighteen,
            color: Colors.secondaryBtnText,
            marginTop: Metrics.ratio(15)
          }}>
          {home.wantToday}
        </Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: Metrics.ratio(20)
        }}>
          <TouchableOpacity style={styles.selectButon}>
            <Image style={{
              // width: Metrics.ratio(27), height: Metrics.ratio(27)
            }} source={send_money} />
            <Text style={
              {
                fontFamily: Fonts.type.RobotoMedium,
                fontSize: Fonts.size.thirteen,
                color: Colors.mantle_grey,
                marginTop: Metrics.ratio(8)
              }
            }>{home.sendMoney}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButon}>
            <Image style={{
              // width: Metrics.ratio(27), height: Metrics.ratio(27)
            }} source={Invest_money} />
            <Text style={
              {
                fontFamily: Fonts.type.RobotoMedium,
                fontSize: Fonts.size.thirteen,
                color: Colors.mantle_grey,
                marginTop: Metrics.ratio(8)
              }
            }>{home.investMoney}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };

  const renderBottom = () => {
    const tabs = [
      { icon: home_selected, name: "Home" },
      { icon: profile_icon, name: "Profile" },
      { icon: help_icon, name: "Help" },
    ];
    return (
      <View style={{
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
          <View style={{ alignItems: "center", }}>
            <Image
              style={{
                // width: Metrics.ratio(10),
                // height: Metrics.ratio(10),
              }}
              resizeMethod='auto'
              resizeMode='contain'
              source={item.icon}
            />
            <Text style={{
              fontFamily: Fonts.type.RobotoRegular,
              fontSize: Fonts.size.thirteen,
              color: Colors.mantle_grey
            }}>{item.name}</Text>
          </View>
        ))}
      </View>
    )
  }

  const FirstRoute = (navigation) => {
    return (
      <RenderListTab
        data={recentTransfer}
        handleNavigation={handleNavigate}
        navigation={navigation}
      />
    );
  };

  const SecondRoute = (navigation) => {
    return (
      <RenderListTab
        data={recentTransfer}
        handleNavigation={handleNavigate}
        navigation={navigation}
      />
    );
  };

  const renderTab = () => {
    return (
      <CustomTabView
        renderScene={{
          RecentTransfer: FirstRoute,
          Invesment: SecondRoute,
        }}
        onChangeIndex={index =>
          setRouteIndex(index)
        }
        route={route}
        handleLeftTabButton={() => setRouteIndex(0)}
        handleRightTabButton={() => setRouteIndex(1)}
        leftButtonText={home.recentTransfer}
        rightButtonText={home.invesment}
        activeNavigation={true}
        routeIndex={routeIndex}
      />
    )
  };



  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      {renderCarousel()}
      {renderSelection()}
      {renderTab()}
      {renderBottom()}
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.bool
  }).isRequired
};

export default Home;
