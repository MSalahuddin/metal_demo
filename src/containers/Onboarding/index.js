// @flow
import React, {useState} from 'react';

import {Slider, Slide} from '../../components';
import {
  fingerprint,
  Invest_money,
  scan_success,
  send_money,
} from '../../assets/images';

const slides = [
  {
    color: '#F2A1AD',
    title: 'Dessert Recipes',
    description:
      'Hot or cold, our dessert recipes can turn an average meal into a memorable event',
    picture: fingerprint,
  },
  {
    color: '#0090D6',
    title: 'Healthy Foods',
    description:
      'Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs',
    picture: Invest_money,
  },
  {
    color: '#69C743',
    title: 'Easy Meal Ideas',
    description:
      'explore recipes by food type, preparation method, cuisine, country and more',
    picture: scan_success,
  },
  {
    color: '#FB3A4D',
    title: '10000+ Recipes',
    description:
      'Browse thousands of curated recipes from top chefs, each with detailled cooking instructions',
    picture: send_money,
  },
];

const Onboarding = props => {
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];
  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}>
      <Slide slide={slides[index]} />
    </Slider>
  );
};

export default Onboarding;
