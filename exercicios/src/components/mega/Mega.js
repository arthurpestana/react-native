import React from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import estilo from '../estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            qntnumeros: props.qntnumeros,
            numeros: [],
        }
    }

    altQuant = (qntnumeros) => {
        this.setState({qntnumeros: +qntnumeros})
    }

    randomNumber(qntnumeros, numbers=[]) {
        let rand = Math.floor(Math.random() * 60) + 1
        if (numbers.includes(rand)) {
            return this.randomNumber(qntnumeros, numbers)
        }
        numbers.push(rand)
        if (qntnumeros<=1){
            return numbers
        }
        return this.randomNumber(qntnumeros-1, numbers)
    }

    gerarNumeros = () => {
        const numeros = this.randomNumber(this.state.qntnumeros)
        this.setState({numeros: numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros.sort((a,b)=>a-b)
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <React.Fragment>
                <Text style={estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 2}}
                    placeholder='Quantidade de Números'
                    value={`${this.state.qntnumeros}`}
                    onChangeText={qntnumeros => this.altQuant(qntnumeros)}
                />
                <Button title='Gerar Números' onPress={this.gerarNumeros}/>
                <Text>
                    Quantidade de Números Gerados: {this.state.qntnumeros}
                </Text>
                {this.state.numeros}
                <View style={{
                    flexDirection: 'row', 
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>  
                    {this.exibirNumeros()}  
                </View>
                
            </React.Fragment>
        )
    }
}