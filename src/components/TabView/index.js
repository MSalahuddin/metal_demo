// @flow
// import { connect } from 'react-redux';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Metrics } from '../../theme';
import TabBar from '../TabBar';

const CustomTabView = (props) => {
    const {
      leftButtonText,
      rightButtonText,
      renderScene,
      route,
      onChangeIndex,
      handleRightTabButton,
      handleLeftTabButton,
      routeIndex,
      activeNavigation,
      singleTabStyle
    } = props;
    
    return (
      <View style={styles.container}>
        <TabView
          navigationState={route}
          renderScene={SceneMap(renderScene)}
          onIndexChange={onChangeIndex}
          initialLayout={{ width: Metrics.screenWidth }}
          renderTabBar={() => (
            <TabBar
              isActive={routeIndex === 0 ? activeNavigation : !activeNavigation}
              leftButtonPress={() => handleLeftTabButton()}
              leftButtonText={leftButtonText}
              rightButtonPress={() => handleRightTabButton()}
              rightButtonText={rightButtonText}
              singleTabStyle={singleTabStyle}
            />
          )}
        />
      </View>
    );
  
}

CustomTabView.defaultProps = {
  leftButtonText: undefined,
  rightButtonText: undefined,
  renderScene: undefined,
  route: undefined,
  onChangeIndex: undefined,
  handleRightTabButton: undefined,
  handleLeftTabButton: undefined,
  routeIndex: undefined,
  activeNavigation: undefined,
  singleTabStyle: undefined
};

CustomTabView.propTypes = {
  leftButtonText: PropTypes.string,
  rightButtonText: PropTypes.string,
  renderScene: PropTypes.object,
  route: PropTypes.object,
  onChangeIndex: PropTypes.func,
  handleRightTabButton: PropTypes.func,
  handleLeftTabButton: PropTypes.func,
  routeIndex: PropTypes.number,
  activeNavigation: PropTypes.bool,
  singleTabStyle: PropTypes.bool
};
export default CustomTabView;