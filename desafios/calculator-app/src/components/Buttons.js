import React from 'react'
import {Button, Pressable, Text, View} from 'react-native'

import styles from '../styles/style-calc'

export default (props) => {
    
    execButton = ({props, value}) => {
        if (Number(value)){
            return (props.func(value))
        }
    }

    return (
        <View>
            <Pressable onPress={execButton(props.value)} style={styles.calc__button}>
                <Text style={styles.button__text}>{props.title}</Text>
            </Pressable>
        </View>
    )
}