import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppState,
  BackHandler,
  // I18nManager,
  // DeviceEventEmitter,
  Alert
} from 'react-native';
// import RNReactNativeLocale from 'react-native-locale-listener';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import Navigator from './src/navigation';
import configureStore from './src/redux/store';
import { DataHelper } from './src/helpers';
import Utils from './src/util';
import NetworkInfo from './src/services/NetworkInfo';
import { networkInfoListener } from './src/redux/actions/NetworkInfoActions';
// import { languageInitialize } from './src/I18n';
// import SplashScreen from 'react-native-splash-screen';

const reducers = require('./src/redux/reducers').default;

export default class App extends Component {
  state = {
    isLoading: true,
    showVerUpdateModal: false,
    appConfigData: {},
    // reducers, newState
    store: configureStore(reducers, newState => {
      this.setState({ isLoading: false }, () => {
        DataHelper.setStore(this.state.store);
        this.onLoadingComplete();
      });
    }),
  };

  componentDidMount() {
    // if (Utils.isPlatformAndroid()) NativeModules.SplashScreen.hide();

    BackHandler.addEventListener('hardwareBackPress', () => null);

    console.disableYellowBox = true;
    NetworkInfo.networkInfoListener(
      this.state.store.dispatch,
      networkInfoListener,
    );

    // RNReactNativeLocale.addLocaleListener(this.changeLayout);

    if (Utils.isPlatformAndroid()) {
    }

    // DeviceEventEmitter.addListener('LayoutDirection', (event: Event) => {
    //   console.log(event);
    //   if (event == true) {
    //     if (!I18nManager.isRTL) {
    //       I18nManager.forceRTL(true);
    //       RNRestart.Restart();
    //     }
    //   } else {
    //     if (I18nManager.isRTL) {
    //       I18nManager.forceRTL(false);
    //       RNRestart.Restart();
    //     }
    //   }
    // });
  }

  componentWillMount() {
    // NetworkInfo.removeNetworkInfoListener(
    //   this.state.store.dispatch,
    //   networkInfoListener
    // );
  }

  reporter = error => {
    // Logic for reporting to devs
    // Example : Log issues to github issues using github apis.
    console.log(error); // sample
  };

  errorHandler = (e, isFatal) => {
    if (isFatal) {
      this.reporter(e);
      Alert.alert(
        'Unexpected error occurred',
        `
          Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
  
          We have reported this to our team ! Please close the app and start again!
          `,
        [
          {
            text: 'Close',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ],
      );
    } else {
      console.log(e); // So that we can see it in the ADB logs in case of Android if needed
    }
  };

  nativeErrorCallback = (errorString) => {
    Alert.alert("Native Exception", errorString)
    console.log(errorString, 'errorString errorString ')
  }

  // changeLayout(language) {
  //   RNRestart.Restart();
  // }

  onLoadingComplete = () => {
    NetworkInfo.networkInfoListener(
      this.state.store.dispatch,
      networkInfoListener,
    );
    // AppState.addEventListener('change', this._handleAppStateChange);
    // languageInitialize();
    // setJSExceptionHandler(this.errorHandler, true);
    // setNativeExceptionHandler(this.nativeErrorCallback, false);
  };

  render() {
    // SplashScreen.hide();

    return (
      <Provider store={this.state.store}>
        <Navigator />
      </Provider>
    );
  }
}
