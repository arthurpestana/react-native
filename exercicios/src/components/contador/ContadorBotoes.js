import React from 'react'
import {Button, Text, View, StyleSheet} from 'react-native'

export default (props) => {
    return (
        <View style={style.Box}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>
    )
}

const style = StyleSheet.create({
    Box: {
        flexDirection: "row",
        padding: 20
    },
})