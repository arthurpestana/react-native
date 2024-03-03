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
            displayValue: '0'
        }
    }

    setOperation = (op) => {
        return console.warn(op)
    }

    render() {
        return (
            <View style={styles.calc__box}>
                <div style={styles.calc__div}>
                    <Display value={this.state.displayValue}/>
                </div>
                <div style={styles.calc__buttonBox}>
                    <Buttons title='AC' value={'ac'} func={this.setOperation}/>
                    <Buttons title='Del' value={'del'}/>
                    <Buttons title='%' value={'%'}/>
                    <Buttons title='/' value={'/'}/>
                    <Buttons title='7' value={7}/>
                    <Buttons title='8' value={8}/>
                    <Buttons title='9' value={9}/>
                    <Buttons title='x' value={'*'}/>
                    <Buttons title='4' value={4}/>
                    <Buttons title='5' value={5}/>
                    <Buttons title='6' value={6}/>
                    <Buttons title='-' value={'-'}/>
                    <Buttons title='1' value={1}/>
                    <Buttons title='2' value={2}/>
                    <Buttons title='3' value={3}/>
                    <Buttons title='+' value={'+'}/>
                    <Buttons title='0' value={0}/>
                    <Buttons title=',' value={','}/>
                    <Buttons title='=' value={'='}/>
                </div>
                <StatusBar style="auto" />
            </View>
        )
    }
}