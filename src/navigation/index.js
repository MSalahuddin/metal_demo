import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import util from '../util';
import {logout} from '../redux/actions/Login';
import { SCREENS } from '../constant/constant';

// import {OverlayLoader} from '../components';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {user: null, isLoading: false, newView: null};

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps?.navigation,'nextPropsnextProps')
    if(nextProps?.navigation){
      if(nextProps?.navigation?.newView === SCREENS.HOME){
        return{newView: nextProps?.navigation?.newView}
      }
    }
    // if (
    //   prevState.login?.data?.id !== nextProps.login?.data?.id &&
    //   nextProps?.login?.data?.data?.isActive
    // ) {
    //   return {user: nextProps.login, isLoading: false};
    // } else if (
    //   nextProps.login?.data?.id &&
    //   !nextProps?.login?.data?.data?.isActive
    // ) {
    //   util.showAlertWithDelay(
    //     'Error',
    //     'Your account is deleted by admin.',
    //     1000,
    //   );
    //   nextProps.logout();
    //   return {user: null, isLoading: false};
    // } else {
    //   return {user: null, isLoading: false};
    // }
  }

  render() {
    const {user, isLoading, newView} = this.state;

    return (
      <NavigationContainer>
        {/* <OverlayLoader isLoading={isLoading} /> */}
        {/* user */}
        {newView === SCREENS.HOME ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({login: state.login, navigation: state.navigation });

const actions = {logout};

export default connect(mapStateToProps, actions)(Navigation);
