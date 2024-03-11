import React from 'react'
import { TouchableOpacity, View, } from 'react-native'

import styles from '../styles/style_app'

export default (props) => {
    const stylesButton = [styles.field__button]

    if(props.styles_color) stylesButton.push(styles.alt_color)

    return (
        <TouchableOpacity style={stylesButton} onPress={() => {console.warn(props.x, props.y)}}>

        </TouchableOpacity>
    )
}