import React from 'react'
import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    container_app: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A752C',
    },
    
    app__header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A752C',
    },

    header__title: {
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 24,
    },

    app__main: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 3,
        marginHorizontal: 20,
    },

    field: {
        display: 'flex',
    },

    field__button: {
        width: '10px',
        height: '10px',
        backgroundColor: '#AAD751',
        borderWidth: '1px',
        borderColor: '#000',
        marginHorizontal: '1px',
    },

    alt_color: {
        backgroundColor: '#A2D149',
    },
})