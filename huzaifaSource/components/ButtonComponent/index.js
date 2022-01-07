import React from 'react'
import {Text,TouchableHighlight} from 'react-native'
import Colors from '../../config/Colors'
import styles from './styles'

export default function ButtonComponent({children,onpress,style}) {
    return (
        <TouchableHighlight
        underlayColor={Colors.primary}
        onPress={onpress}
        style={[styles.ButtonComponent,style]}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableHighlight>
    )
}

