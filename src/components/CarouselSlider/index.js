import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';

import styles from './styles';
import { Metrics } from '../../theme';
import { SliderBox } from "react-native-image-slider-box";

const CarouselSlider = (props) => {

  const { bannerImages } = props;

  return (
   <View>
     <SliderBox
            autoplay
            circleLoop
            onCurrentImagePressed={(i) => {
              // onPress(i)
            }}
            resizeMethod={'auto'}
            resizeMode={'contain'}
            // eslint-disable-next-line react-native/no-inline-styles
            ImageComponentStyle={{
              height: "100%"
              // justifyContent:'center'
            }}
           
            sliderBoxHeight={100}
            images={bannerImages} />
   </View>
  );
};

CarouselSlider.defaultProps = {
  bannerImages: undefined
};

CarouselSlider.propTypes = {
  bannerImages: PropTypes.arrayOf(PropTypes.number)
};

export default CarouselSlider;
// /* eslint-disable no-nested-ternary */
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components/native';
// import { SliderBox } from "react-native-image-slider-box";
// import PropTypes from 'prop-types';
// import { Platform } from 'react-native'
// import Text, { FONT_FAMILY, SIZE } from './Text';
// import { scale, getWindowWidth, scaleHeight, heightRatio, scaleWidth } from '../../platformUtils';
// import { color, hitSlop, fontFamily } from '../../styles';
// import {
//   ExitCircle,

// } from '../../../assets/images';
// const cardWidth = (getWindowWidth() - 3 * scale(16)) / 2;
// const cardHeight = (cardWidth * 320) / 250;
// const Container = styled.View`
//   margin-horizontal: ${({ isCard }) => (isCard ? 0 : scale(16))};
//   shadow-color: ${color.blackShadow};
//   shadow-offset: 4px 4px;
//   border-width: 6;
//   border-color: ${color.white};
//   border-radius: 10;
//   shadow-opacity: ${1};
//   shadow-radius: 2px;
//   elevation: 8;
//   z-index:1;
//   overflow:hidden;
//   ${({ height }) => height && `height: ${height}`};
// `;



// const CloseButtonContainer = styled.TouchableOpacity`
// position:absolute;
// right:2;
// top:2 
// z-index:10
// `;

// const CloseIcon = styled.Image`
//   height: ${scale(24)};
//   width: ${scale(24)};
// `;



// const PromoCard = ({ isClosable, isCard, onClose, onPress, data ,...rest}) => {
//   const [verticalBannerImages, setVerticalBannerImages] = useState(null);
//   const [horizontalBannerImages, setHorizontalBannerImages] = useState(null);


//   useEffect(() => {
//     const fetchImages = async () => {
//       const verticalImage = data.map((v, i) => {
//         return v.verticalImageUrl
//       })
//       const HorizontalImage = data.map((v, i) => {
//         return v.imageUrl
//       })
//       setHorizontalBannerImages(HorizontalImage)
//       setVerticalBannerImages(verticalImage)
//     }
//     fetchImages()
//   }, [])
//   // promo card size is full screen minus padding left, right and middle which is 16 each
//   // and we display two cards per row therefore divide by 2
//   // promo card banner size is full screen minus padding right and left
//   const promoCardWidth = (getWindowWidth() - 3 * scale(16)) / 2;
//   const width = isCard ? promoCardWidth : null;
//   let height = null;
//   if (isCard) {
//     height = cardHeight;
   
//   }

//   const renderClose = () =>
//     isClosable && (
//       <CloseButtonContainer onPress={() => onClose()}>
//         <CloseIcon testID="close-button" source={ExitCircle} resizeMode="contain" hitSlop={hitSlop(20, 20)} />
//       </CloseButtonContainer>
//     );

//   return (
//     <Container {...rest} isCard={isCard} width={isCard?cardWidth:null} height={isCard?height:null}>
//       {renderClose()}
//       {data &&
//         <>
//           {(isClosable && horizontalBannerImages) && <SliderBox
//             autoplay
//             circleLoop
//             onCurrentImagePressed={(i) => {
//               onPress(i)
//             }}
//             resizeMode='cover'
//             // eslint-disable-next-line react-native/no-inline-styles
//             sliderBoxHeight={isClosable ? 100 : 300}
//             images={ horizontalBannerImages} />}
//           {(!isClosable && verticalBannerImages) && <SliderBox
//             autoplay
//             circleLoop
//             onCurrentImagePressed={(i) => {
//               onPress(i)
//             }}
//             resizeMode='cover'
//             // eslint-disable-next-line react-native/no-inline-styles
//             ImageComponentStyle={{
//               alignSelf:'center',
//               marginLeft:Platform.OS==='android'?
//               heightRatio > 1.2?
//               -230 :
//               heightRatio < 1?
//               -220: 
//               heightRatio <= 1.04?
//               -220:
//               -220:
//               (heightRatio > 1.2 && heightRatio < 1.3)?
//               -225:
//               heightRatio > 1.2?
//               -250:
//               -225,
//               width:promoCardWidth,
//               height:'100%',
//               justifyContent:'center'
//             }}
           
//             sliderBoxHeight={isClosable ? 100 : 300}
//             images={verticalBannerImages} />}
//         </>
//       }

//     </Container>
//   );
// };

// PromoCard.propTypes = {
//   isCard: PropTypes.bool,
//   isClosable: PropTypes.bool,
//   onClose: PropTypes.func,
//   onPress: PropTypes.func.isRequired,
//   data: PropTypes.node
// };

// PromoCard.defaultProps = {
//   isCard: false,
//   isClosable: false,
//   onClose: () => { },
//   data: null
// };

// export default PromoCard;
