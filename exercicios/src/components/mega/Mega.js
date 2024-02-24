import React from 'react'
import {Text, TextInput} from 'react-native'
import estilo from '../estilo'

export default class Mega extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            qntnumeros: props.qntnumeros
        }
    }

    altQuant(quant) {
        this.setState({qntnumeros: quant})
    }

    render() {
        return (
            <React.Fragment>
                <Text style={estilo.fontG}>
                    Gerador de Mega-Sena
                    {this.state.qntnumeros}
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 2}}
                    placeholder='Quantidade de Números'
                    value={this.state.qntnumeros}
                    onChangeText={quant => this.altQuant(quant)}
                />
            </React.Fragment>
        )
    }
}