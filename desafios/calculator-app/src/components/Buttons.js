import React from 'react'
import {Button, Pressable, Text, View} from 'react-native'

import styles from '../styles/style-calc'

export default (props) => {

    const stylesButton = [styles.calc__button]

    if (props.style_double) stylesButton.push(styles.button__double)
    if (props.style_resul) stylesButton.push(styles.button__resul)

    const stylesTextButton = [styles.button__text]

    if (props.style_operation) stylesTextButton.push(styles.button__operation)

    return (
        <View>
            <Pressable onPress={() => props.onClick(props.value)} style={stylesButton}>
                <Text style={stylesTextButton}>{props.title}</Text>
            </Pressable>
        </View>
    )
}