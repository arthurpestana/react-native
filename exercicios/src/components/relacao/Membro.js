import React from 'react'
import {Text, SafeAreaView} from 'react-native'
import Estilo from '../estilo'

export default (props) => {
    return (
        <SafeAreaView>
            <Text style={Estilo.fontG}>
                {props.nome} {props.sobrenome}
            </Text>
        </SafeAreaView>
    )
}