import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import StyleMain from './style'

export default function () {
    return <Text style={StyleMain.fontG}>Comp #000</Text>
}

export function Comp1() {
    return <Text style={StyleMain.fontG}>Comp #001</Text>
}

export function Comp2() {
    return <Text style={StyleMain.fontG}>Comp #002</Text>
}

//export {Comp1, Comp2}
//export default FunctionName