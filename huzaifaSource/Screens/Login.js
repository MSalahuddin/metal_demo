import React from 'react'
import { ImageBackground} from 'react-native'
import Form from '../components/Form/index'
import Logo from '../components/Logo/index'
import styles from './styles'

export default function Login() {
    return (
        <ImageBackground
            style={styles.container}
            source={require("../assets/backgroundImage.jpg")}>
            <ImageBackground
                blurRadius={3}
                style={styles.image}
                source={require("../assets/image.jpg")}
            >
                <Logo/>
                <Form />
            </ImageBackground>
        </ImageBackground>
    )
}
