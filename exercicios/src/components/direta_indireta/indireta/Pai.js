import React, {useState} from 'react'
import {Button, Text} from 'react-native'
import Estilo from '../estilo'

import Filho from './Filho'

export default (props) => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(num, texto) {
        setNum(num)
        setTexto(texto)
    }

    return (
        <>
            <Text style={Estilo.fontG}>
                {texto}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                func={exibirValor}
            />
        </>
    )
}