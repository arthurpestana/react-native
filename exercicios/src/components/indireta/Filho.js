import React from 'react'
import {Text, Button} from 'react-native'
import Estilo from '../estilo'

export default (props) => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button 
            title="Executar"
            onPress={() => {
                const n = gerarNumero(props.max, props.min)
                props.func(n, "O valor é: ")
            }}
        />
    )
}