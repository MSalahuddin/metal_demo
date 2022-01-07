// @flow
import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { Images, Colors} from '../../theme';
import {  OverlayLoader, Button } from '../../components';
import { request as login_request } from '../../redux/actions/Login';
import { loginStrings } from "../../constant/stringConstants";

let errors = {
  emailErr: 'Invalid email address.',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
};

const Login = (props) => {
  const dispatch = useDispatch();

  const loginResponse = useSelector((state) => state.login);

  return (

        <View style={styles.container}>
          <Button btnText= {loginStrings.login}/>
        </View>
  );
};

export default Login;
