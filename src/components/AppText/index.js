import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppText({children,style}) {
    return (
       
            <Text style={
               [styles.AppText,style]
            }>{children}</Text>
     
    )
}

const styles = StyleSheet.create({
    AppText:{
        color:Colors.black,
        fontSize:18,
        padding:10
    }
})
