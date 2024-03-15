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
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 3,
        margin: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',  
        paddingVertical: 10, 
        backgroundColor: 'white'
    },

    field: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    field__button: {
        width: '35px',
        height: '35px',
        backgroundColor: '#AAD751',
        borderWidth: '1px',
        borderColor: '#000',
        margin: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    alt_color: {
        backgroundColor: '#8ebd35',
    },
})