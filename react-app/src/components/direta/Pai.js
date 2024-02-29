import React from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

import Filho from './Filho'

export default (props) => {
    let x = 100
    let y = 13
    return (
        <>
            <Filho a={x} b={y}/>
            <Filho a={x+100} b={y+200}/>
        </>
    )
}