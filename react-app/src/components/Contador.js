import React, {useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './estilo'

export default ({num=0, quant=1}) => {
    //let numero = props.num
    const [numero, setNumero] = useState(num)

    const inc = () => {
        setNumero(numero + quant)
        console.warn(numero)
    }
    const dec = () => {
        setNumero(numero - quant)
        console.warn(numero)
    }

    return (
        <React.Fragment>
            <Text style={Estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </React.Fragment>
    )
}