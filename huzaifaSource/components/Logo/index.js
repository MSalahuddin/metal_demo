import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../../config/Colors'
import styles from './styles'

export default function Logo() {
    return (
        <View style={styles.LogoContainer}>
            <Icon name="users-cog" size={40} color={Colors.primary} />
            <Text style={styles.logoText}>Alias</Text>
        </View>
    )
}
