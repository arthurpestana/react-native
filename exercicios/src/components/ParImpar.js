import React from 'react'
import {Text, SafeAreaView} from 'react-native'
import Estilo from './estilo'

export default ({num=0}) => {
    return (
        <SafeAreaView>
            <Text style={Estilo.fontG}>O resultado é:</Text>
            <Text style={Estilo.fontG}>{num%2===0 ? "Par" : "Impar"}</Text>
        </SafeAreaView>
    )
}