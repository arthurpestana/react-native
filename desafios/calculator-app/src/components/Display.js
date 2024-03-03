import React from 'react'
import {Text, View} from 'react-native'

import styles from '../styles/style-calc'

export default (props) => {


    return (
        <View style={styles.calc__diplay}>
            <Text style={styles.display__text}>
                {props.value}
            </Text>
        </View>
    )
}