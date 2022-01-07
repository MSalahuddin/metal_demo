import React from 'react'
import { Image,View } from 'react-native'
import styles from './styles'

export default function UserImage({image}) {
    return (
        <View style={styles.imageContainer}>
            <Image
            style={styles.image}
            source={image}
            />
        </View>
    )
}

