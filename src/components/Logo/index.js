import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

export default function Logo() {
    return (
        <View style={styles.LogoContainer}>
            <Text style={styles.logoText}>Alias</Text>
        </View>
    )
}
