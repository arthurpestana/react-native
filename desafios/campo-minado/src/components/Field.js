import React from 'react'
import {View, } from 'react-native'

import MineField from './MineField'
import styles from '../styles/style_app'

export default (props) => {

    let bombs = 10
    let tam = 10
    let alt_color = 0 

    field_game = []

    if (props.difficult == 1) {
        bombs = 10
        tam = 10
    }

    for (let i=0; i<tam; i++) {
        for (let j=0; j<tam; j++) {
            if (alt_color==0) {
                field_game.push(<MineField x={i} y={j}/>)
                alt_color=1
            }
            else {
                field_game.push(<MineField alt_color x={i} y={j}/>)
                alt_color=0
            }
        }
    }

    renderField = (button_field) => {
        return button_field
    }

    return (
        <View style={styles.field}>{field_game.map(renderField)}</View>
    )
}