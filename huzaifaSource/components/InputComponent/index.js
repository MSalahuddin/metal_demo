import React from 'react'
import {TextInput, View } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../../config/Colors'

export default function InputComponent({ placeholder = "Enter Your Pin"}) {
    return (
        <View style={styles.InputComponent}>
            <TextInput placeholder={placeholder} />
            <Icon name='fingerprint' size={25} color={Colors.primary}></Icon>
        </View>
    )
}
