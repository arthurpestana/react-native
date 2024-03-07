import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button, SafeAreaView, Text, View} from 'react-native';

import styles from './src/styles/style-calc'
import Display from './src/components/Display';
import Buttons from './src/components/Buttons'

export default class App extends React.Component {
    
    constructor (props) {
        super(props)
        
        this.state = {
            displayValue: '',
        }
    }

    resul = 0
    num1 = 0
    num2 = 0
    numbers = []
    op = false
    display_values = []

    addDigit = (digit) => {
        if (this.resul != 0) this.clearMemory()
        if (digit == '.' && this.numbers.length==0) {
            this.numbers.push(Number(0.))
        }
        if (this.op != false) {
            this.display_values = []
        }
        this.numbers.push(digit)
        this.display_values = this.numbers.join('')
        console.warn(this.numbers)
        console.warn(this.display_values)
        this.setState({displayValue: this.display_values.toString().replace(".", ",")})
    }

    clearMemory = () => {
        this.setState({displayValue: ""})
        this.resul = 0
        this.numbers = []
        this.op = false
        this.display_values = []
    }

    setOperation = (operation) => {
        if (this.state.displayValue == '') {
            this.numbers.push(0)
            this.display_values = 0
            this.setState({displayValue: this.display_values.toString().replace(".", ",")})
        }
        if (this.op == false) {
            this.num1 = Number(this.numbers.join(''))
            this.op = operation
            this.numbers = []
        }
        else {
            this.num2 = Number(this.numbers.join(''))
            this.resul = this.calcOperation(this.op, Number(this.num1), Number(this.num2))
            this.num1 = this.resul
            this.resul = 0
            this.op = operation
            this.numbers = []
        }
        if (this.resul != 0) {
            console.warn(this.resul)
            this.num1 = this.resul
            this.op = operation
            this.resul = 0
            this.numbers = []
        }

    }

    calcOperation = (op, n1, n2) => {
        if (op == "+") {
            return n1 + n2
        }
        else if (op == "-") {
            return n1 - n2
        }
        else if (op == "*") {
            return n1 * n2
        }
        else if (op == "/") {
            return n1 / n2
        }
        else if (op == "%") {
            return (n1/100)*n2
        }
    }

    calcResul = () => {
        this.num2 = Number(this.numbers.join(''))
        this.resul = this.calcOperation(this.op, Number(this.num1), Number(this.num2))
        this.display_values = this.resul
        this.numbers = []
        this.op = false
        this.setState({displayValue: this.display_values.toString().replace(".", ",")})
    }

    render() {
        return (
            <SafeAreaView style={styles.calc__box}>
                <div style={styles.calc__div}>
                    <Display value={this.state.displayValue}/>
                </div>
                <div style={styles.calc__buttonBox}>
                    <Buttons title='AC' value={'ac'} style_operation style_double onClick={this.clearMemory}/>
                    <Buttons title='%' value={'%'} style_operation onClick={this.setOperation}/>
                    <Buttons title='/' value={'/'} style_operation onClick={this.setOperation}/>
                    <Buttons title='7' value={7} onClick={this.addDigit}/>
                    <Buttons title='8' value={8} onClick={this.addDigit}/>
                    <Buttons title='9' value={9} onClick={this.addDigit}/>
                    <Buttons title='x' value={'*'} style_operation onClick={this.setOperation}/>
                    <Buttons title='4' value={4} onClick={this.addDigit}/>
                    <Buttons title='5' value={5} onClick={this.addDigit}/>
                    <Buttons title='6' value={6} onClick={this.addDigit}/>
                    <Buttons title='-' value={'-'} style_operation onClick={this.setOperation}/>
                    <Buttons title='1' value={1} onClick={this.addDigit}/>
                    <Buttons title='2' value={2} onClick={this.addDigit}/>
                    <Buttons title='3' value={3} onClick={this.addDigit}/>
                    <Buttons title='+' value={'+'} style_operation onClick={this.setOperation}/>
                    <Buttons title='0' value={0} onClick={this.addDigit} style_double/>
                    <Buttons title=',' value={'.'} onClick={this.addDigit}/>
                    <Buttons title='=' value={'='} style_resul onClick={this.calcResul}/>
                </div>
                <StatusBar style="auto" />
            </SafeAreaView>
        )
    }
}