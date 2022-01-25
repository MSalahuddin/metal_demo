import React, { Children, useState } from 'react';
import { Modal, Text, View, } from 'react-native';
import Button from '../Button';
import { Metrics, Colors } from '../../theme';
import { AuthString } from '../../constant/stringConstants';
import { Fonts } from '../../theme';

const ModalTemplate = ({children}) => {
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
        >
            {children}
        </Modal>
    )
}
export default ModalTemplate;