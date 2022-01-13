// @flow
import React, {useState} from 'react';
import {View, Image, ImageBackground, Text, TouchableOpacity} from "react-native";
import {Slider, Slide} from '../../components';
import {
  first_onboarding,
  second_onboarding,
  logo,
  onboarding_bg,
  left_circle
} from '../../assets/images';
import {Colors, Fonts, Metrics} from "../../theme";
import {onboarding} from "../../constant/stringConstants";
import Onboarding from 'react-native-onboarding-swiper';

const slides = [
  {
    color: Colors.white,
    title: onboarding.invesmentProduct,
    description:
      'Hot or cold, our dessert recipes can turn an average meal into a memorable event',
    picture: first_onboarding,
  },
  {
    color: '#0090D6',
    title: 'Healthy Foods',
    description:
      'Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs',
    picture: second_onboarding,
  },
];

const OnboardingScreen = props => {
  // const [index, setIndex] = useState(0);
  // const prev = slides[index - 1];
  // const next = slides[index + 1];
  // return (
  //   <Slider
  //     key={index}
  //     index={index}
  //     setIndex={setIndex}
  //     prev={prev && <Slide slide={prev} />}
  //     next={next && <Slide slide={next} />}>
  //     <Slide slide={slides[index]} />
  //   </Slider>
  // );

  // const buildPage = ({ content, pageIndex, title, backgroundImage, withMascot = false, isNotification, headerImage }) => {
  //   const buttonTitle = commonStrings.next;
  //   const buttonAction = pageIndex === pageCount - 1 ? requestPushNotificationPermission : nextAction;

  //   return {
  //     backgroundColor: color.transparent,
  //     image: <RenderNull />,
  //     title: (
  //       <View style={{}}>
  //         {/* <BuildContainer> */}
  //         {/* <PageTitle
  //             size={SIZE.LARGEST}
  //             fontFamily={FONT_FAMILY.SEMI_BOLD}
  //             marginBottom={Platform.OS === 'android' ? isNotification ? '-14%' : heightRatio > 1 ?  '-20%' : '-30%'
  //               : isNotification ? heightRatio > 1 ?  (heightRatio > 1 && heightRatio < 1.2) ?  '-25%' : '-50%' : '-27%' : heightRatio > 1 ? (heightRatio > 1 && heightRatio < 1.2) ? '-25%' : '-53%' : '-30%'} >
  //             {title}</PageTitle> */}
  //         <ContentContainer
  //           source={backgroundImage || onBoardingBackgroundImage}
  //           resizeMode="contain"
  //         >
  //           {/* {headerImage && */}
  //           <RealPrizeIcon
  //             source={headerImage}
  //             resizeMode='contain'
  //             bottom={heightRatio > 1 ? Platform.OS === 'android' ? isNotification ? 130 : 120 : heightRatio < 1.2 ? 140 : 125
  //               : Platform.OS === 'android' ? isNotification ? 160 : 125 : 145}
  //           />
  //           <Backdrop>{content}</Backdrop>
  //           {Platform.OS === 'android' ?
  //             <StyledButtonAndroid
  //               testID="next-button"
  //               height={heightRatio > 1 ? 65 : 62}
  //               width={screenWidth * 0.5}
  //               theme={BUTTON_COLOR_SCHEME.BLUE}
  //               onPress={() => {
  //                 setCurrentPageIndex(pageIndex + 1)
  //                 buttonAction()
  //               }}
  //               isNotification={isNotification}
  //               marginTop={heightRatio > 1 ? 12 : isNotification ? 8 : 15}
  //             >
  //               <ButtonText
  //                 color={color.white}
  //                 size={SIZE.SMALL}
  //                 fontFamily={FONT_FAMILY.BOLD}
  //               >{buttonTitle}</ButtonText>
  //             </StyledButtonAndroid>
  //             :
  //             <StyledButton
  //               testID="next-button"
  //               height={heightRatio > 1 ? 65 : 66}
  //               width={screenWidth * 0.5}
  //               theme={BUTTON_COLOR_SCHEME.BLUE}
  //               onPress={() => {
  //                 setCurrentPageIndex(pageIndex + 1)
  //                 buttonAction()
  //               }}
  //               isNotification={isNotification}
  //               marginTop={heightRatio > 1 ? isNotification ? 12 : 7 : isNotification ? 16 : 12}
  //             >
  //               <ButtonText
  //                 color={color.white}
  //                 size={SIZE.SMALL}
  //                 fontFamily={FONT_FAMILY.BOLD}
  //               >{buttonTitle}</ButtonText>
  //             </StyledButton>}


  //           {/* {withMascot && <MascotView source={chickenWithPhone} resizeMode="contain" />} */}
  //         </ContentContainer>
  //         {/* </BuildContainer> */}

  //       </View>
  //     ),
  //     subtitle: <RenderNull />
  //   };
  // };

  const buildPage = () => {
    return{
      backgroundColor: Colors.white,
      title: (
        <View style = {{flexDirection: "row", justifyContent: "center",}}>
          <View style = {{
            height: Metrics.screenHeight,
            width: Metrics.screenWidth * 0.9,
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "red"
             }}></View>
          <View>
             <Image source={onboarding_bg}/>
          </View>  
        </View>
      ),
      subtitle: null
    };
  };

  const renderHeader = () => {
    return(
      <View style = {{
        height: Metrics.screenHeight * 0.2,
        width: Metrics.screenWidth * 0.9,
        flexDirection: "row", 
        // marginHorizontal: Metrics.ratio(20),
        alignItems: "center",
      }}>  
        <Image
          style = {{
            width: Metrics.ratio(120),
            height: Metrics.ratio(70),
          }}
          resizeMode='contain'
          resizeMethod='auto'
          source={logo}/>
          <Text
            style = {{
              fontSize: Fonts.size.eighteen,
              fontFamily: Fonts.type.RobotoRegular,
              color: Colors.mantle_grey,
              marginLeft: "auto",
              marginTop: Metrics.ratio(-7)
            }}
          >
            {onboarding.skip}
          </Text>
      </View>
    )
  }

  return(
    <View style = {{flex: 1, flexDirection: "row"}}>
      <View>
        {renderHeader()}
        <View style = {{alignItems: "center"}}>
          <Image
            resizeMethod= 'auto'
           style = {{
             height: Metrics.screenHeight * 0.3,
             width: Metrics.screenWidth * 0.77,
             right: Metrics.ratio(-10)
             }} source={first_onboarding}/>
        </View>
        <View style = {{
          width: Metrics.screenWidth * 0.7,
          marginTop: "auto",
          bottom: Metrics.screenHeight * 0.1,
          marginHorizontal: Metrics.ratio(20)
          }}>
          <Text style = {{
            fontFamily: Fonts.type.RobotoBold,
            fontSize: Fonts.size.xxLarge,
            color: Colors.mainHeading
          }}>{onboarding.moneyTransfer}</Text> 
            <Text style = {{
            fontFamily: Fonts.type.RobotoRegular,
            fontSize: Fonts.size.eighteen,
            color: Colors.headingContent,
            marginTop: Metrics.ratio(15)
          }}>{onboarding.loremipsum}</Text>  
        </View>
      </View>
      <View style = {{marginLeft: "auto"}}>
        <ImageBackground style = {{
          height: Metrics.screenHeight,
          width: Metrics.screenWidth * 0.22
        }}
        source={onboarding_bg}>
         <TouchableOpacity 
           style = {{
            marginTop: "auto",
            alignItems:"center",
            bottom: Metrics.screenHeight * 0.17,
          }}>
          <Image 
              resizeMode='contain'
              resizeMethod='auto'
              source={left_circle}
              />
         </TouchableOpacity>
        </ImageBackground>
      </View>

    </View>
  )
};

export default OnboardingScreen;
