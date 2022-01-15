import React, { useState } from 'react';
import { Modal, Text, View, } from 'react-native';

import Button from '../../components/Button';
import { Metrics, Colors } from '../../theme';
import { AuthString } from '../../constant/stringConstants';
import { Fonts } from '../../theme';
import PropTypes from 'prop-types';
import { transparent_fingure } from '../../assets/images';
const EnterYourPassword = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <Modal
            animationType="slide"
            transparent={true}
            backdropColor={'black'}
            backdropOpacity={1}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            shadowOpacity={0.4}
        ><View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: '#73737380'
        }}>

                <View style={{
                    justifyContent: 'center',
                    backgroundColor: Colors.white,
                    width: Metrics.screenWidth * 0.85,
                    height: Metrics.screenHeight * 0.30,
                    paddingHorizontal: Metrics.screenWidth * 0.07,
                    borderRadius: 15,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                }}>
                    <Text style={
                        {
                            fontFamily: Fonts.type.RobotoRegular,
                            fontSize: Fonts.size.eighteen,
                            color: Colors.placeholderContent,
                            marginTop: Metrics.ratio(40),
                            marginBottom: 25,
                            textAlign: 'center',
                        }
                    }>Enter Your Password</Text>
                    <Button
                        customBtnStyle={{ width: "100%", marginBottom: 25 }}
                        leftIcon={transparent_fingure}
                        btnText={AuthString.ButtonText.scanYourFingerPrint} />
                    <Button
                        customBtnStyle={{
                            marginTop: Metrics.ratio(0),
                            backgroundColor: Colors.secondaryBtn
                        }}
                        textStyle={{ color: Colors.secondaryBtnText }}
                        btnText={AuthString.ButtonText.cancel}
                        onPress={() => handleNavigation()}
                    />

                </View >
            </View>
        </Modal >

    )
}
export default EnterYourPassword;