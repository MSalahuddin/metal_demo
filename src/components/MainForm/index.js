import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputComponent from '../InputComponent'
import ButtonComponent from '../ButtonComponent'
import AppText from '../AppText'

export default function MainForm() {
    return (
        <View style={styles.formInputs}>
            <InputComponent />
            <View style={styles.formInputsActions}>
                <ButtonComponent onpress={() => console.log("user login")}>Login</ButtonComponent>
                <AppText style={styles.forgotPwText}>Forgot Your Password</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formInputs: {
        paddingHorizontal: 30,
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    formInputsActions: {
        width: "100%",
        alignItems: "center",
    },
    forgotPwText:{
        fontWeight: "700",
        fontSize: 12
    },
})
