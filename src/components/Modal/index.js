import React, { useState } from 'react';
import { Modal, Text, View, } from 'react-native';
import Button from '../../components/Button';
import { Metrics, Colors } from '../../theme';
import { AuthString } from '../../constant/stringConstants';
import { Fonts } from '../../theme';

const ModalTemplate = () => {
    const [modalVisible, setModalVisible] = useState(true);

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
            justifyContent: 'flex-end',
            backgroundColor: '#ffffff',
            marginHorizontal:Metrics.ratio(30),
            marginTop: 70,
        }} >
            <Button
                customBtnStyle={{
                    marginTop: Metrics.ratio(0),
                    backgroundColor: Colors.primaryBtn,
                    marginHorizontal:Metrics.ratio(20)
                }}
                textStyle={{ color: Colors.white }}
                btnText={AuthString.ButtonText.continue}
                onPress={() => handleNavigation()}
            />
        </View>
        </Modal>
    )
}
export default ModalTemplate;