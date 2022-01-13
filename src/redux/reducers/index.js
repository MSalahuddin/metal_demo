import {combineReducers} from 'redux';

import login from './Login';
import navigation from './Navigations';


export default combineReducers({
  login,
  navigation,
});
