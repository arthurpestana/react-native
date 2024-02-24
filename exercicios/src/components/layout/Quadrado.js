import React from 'react'
import {SafeAreaView, Text, StyleSheet} from 'react-native'


export default (props) => {
    const style = StyleSheet.create({
        Quadrado: {
            height: 50,
            width: 50,
            padding: 20,
            backgroundColor: props.cor || "#000",
        }
    })
    return (
        <SafeAreaView style={style.Quadrado}>

        </SafeAreaView>
    )
}

