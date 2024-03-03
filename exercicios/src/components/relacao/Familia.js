import React from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

import Filho from './Membro'

export default (props) => {
    return (
        <>
            <Text>Membros da Família: </Text>
            {props.children}
        </>
    )
}