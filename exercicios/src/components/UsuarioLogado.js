import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

import _if from './if'

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <React.Fragment>
            <_if teste={usuario && Object.keys(usuario).length !== 0 && usuario.nome && usuario.email}>
                <Text style={Estilo.fontG}>
                    Usuário Logado:
                </Text>
                <Text style={Estilo.fontG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </_if>
        </React.Fragment>
    )
}