import React from 'react'
import {Button, StyleSheet} from 'react-native'

export default () => {

    function execButton() {
        console.warn("Executado 01!!!")
    }

    return (
        <React.Fragment>
            <Button
                title="Executar 01"
                onPress={execButton}
            />
            <Button
                title="Executar 02"
                onPress={() => {
                    console.warn("Executado 02!!!")
                }}
            />
        </React.Fragment>
    )
}

