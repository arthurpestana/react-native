import React from "react";
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native'

import styles from './src/styles/style_app'
import Field from './src/components/Field'

export default class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <SafeAreaView style={styles.container_app}>
                <View style={styles.app__header}>
                    <Text style={styles.header__title}>Campo Minado</Text>
                </View>
                <View style={styles.app__main}>
                    <Field style={styles.field} difficult={1}/>
                </View>
            </SafeAreaView>
        )
    }
}