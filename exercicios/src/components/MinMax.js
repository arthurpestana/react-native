import React from 'react'
import { Text } from 'react-native'
import Estilo from './style'

export default (props) => {
    console.warn(props)
    return (
        <Text style={Estilo.fontG}>
            O valor de {props.max} é maior que o valor de {props.min}!
        </Text>
    )
}