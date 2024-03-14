import React from 'react'
import { TouchableOpacity, View, } from 'react-native'

import styles from '../styles/style_app'

export default (props) => {
    const stylesButton = [styles.field__button]

    if(props.alt_color) stylesButton.push(styles.alt_color)

    return (
        <TouchableOpacity style={stylesButton} onPress={() => props.onClick(props.x, props.y)}>

        </TouchableOpacity>
    )
}