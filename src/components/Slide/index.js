import Color from 'color';
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Svg, {RadialGradient, Defs, Rect, Stop} from 'react-native-svg';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('screen');
const SIZE = width * 0.7;

const Slide = (props) => {
  const {slide} = props;
  const lighterColor = Color(slide.color).lighten(0.8).toString();
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="50%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={slide.color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <Image source={slide.picture} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
        </View>
      </View>
    </>
  );
};

Slide.defaultProps = {
  slide: undefined
};

Slide.propTypes = {
  slide: PropTypes.object,
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // padding: 75,
    // paddingTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: width * 0.7,
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    letterSpacing: 0.5,
    lineHeight: 25,
    fontWeight: '100',
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
  },
});
