import React from 'react'
import {View} from 'react-native'
import UserImage from '../UserImage/index'
import AppText from '../AppText/index'
import styles from './styles'
import MainForm from '../MainForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default function Form() {
    return (
            // <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.container}>
            <UserImage image={require("../../assets/elon.jpg")} />
            <AppText style={{ marginTop: 40, fontSize:16, padding:0 }} >Elon Musk</AppText>

            <MainForm/>
            <View style={styles.anotherUser}>
                <AppText style={styles.anotherIdText}>Login with Another ID</AppText>
            </View>
        </View>
            // </KeyboardAwareScrollView>
            
    )
}
