import React from 'react'
import {Text, StyleSheet, SafeAreaView} from 'react-native'
import Estilo from '../estilo'

import Quadrado from './Quadrado'

export default (props) => {
    return ( 
        <SafeAreaView style={style.FlexV4}>
            <SafeAreaView style={style.V0} />
            <SafeAreaView style={style.V1} />
            <SafeAreaView style={style.V2} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create ({
    FlexV4: {
        gap: 20,
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000',
    },

    V0: {
        backgroundColor: '#f22',
        height: 100,
    },

    V1: {
        backgroundColor: '#ff801a',
        flexGrow: 1,
    },

    V2: {
        backgroundColor: "#dd22c1",
        flexGrow: 1,
    },
})