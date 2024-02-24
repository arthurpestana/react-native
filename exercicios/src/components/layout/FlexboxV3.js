import React from 'react'
import {Text, StyleSheet, SafeAreaView} from 'react-native'
import Estilo from '../estilo'

import Quadrado from './Quadrado'

export default (props) => {
    return ( 
        <SafeAreaView style={style.FlexV3}>
            <Quadrado cor='#FFF'/>
            <Quadrado cor='#F00'/>
            <Quadrado cor='#0F0'/>
            <Quadrado cor='#00F'/>
            <Quadrado cor='#FF1'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create ({
    FlexV3: {
        gap: 20,
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    }
})