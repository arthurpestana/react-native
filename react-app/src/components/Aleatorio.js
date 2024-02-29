import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Estilo from './style'

export default (props) => {
    let number = randomNumber(props.numMax, props.numMin)
    return (
        <Text style={Estilo.fontG}>
            Número Sorteado: {number}
        </Text>
    )
}

const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max-min) + min)
}