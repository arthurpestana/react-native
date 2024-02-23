import React from 'react'
import {Platform, Text} from 'react-native'
import Estilo from './estilo'

export default (props) => {
    if (Platform.OS === "android") {
        return (<Text style={Estilo.fontG}>Android</Text>)
    }
    else if (Platform.OS == 'ios') {
        return (<Text style={Estilo.fontG}>iOS</Text>)
    }
    else {
        return (<Text style={Estilo.fontG}>{Platform.OS}</Text>)
    }
}