import React from 'react'
import {Text,TouchableHighlight} from 'react-native'
import styles from './styles'

export default function ButtonComponent({children,onpress,style}) {
    return (
        <TouchableHighlight
        onPress={onpress}
        style={[styles.ButtonComponent,style]}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableHighlight>
    )
}

