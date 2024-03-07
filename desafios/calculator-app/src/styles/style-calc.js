import React from 'react'
import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    calc__box: {
        width: `100%`,
        height: `100%`,
        maxWidth: '425px',
        backgroundColor: "#1C1C1E",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20,
    },

    calc__div: {
        marginTop: 20,
    },

    calc__diplay: {
        width: '85vw',
        height: '12vh',
        maxWidth: '380px',
        borderRadius: 20,
        backgroundColor: '#2e2e30',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 20,
    },

    display__text: {
        fontSize: 28,
        color: '#f0f0f0',
        fontWeight: 400,
    },

    calc__buttonBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },

    calc__button: {
        width: '55px',
        height: '55px',
        backgroundColor: "#2e2e30",
        color: 'white',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        margin: 10,
        marginLeft: 15,
        marginRight: 15,
    },

    button__double: {
        width: '140px',
        height: '55px',
    },

    button__resul: {
        backgroundColor: "#b17a03",
    },

    button__operation: {
        color: "#e09d0a",
    },

    button__text: {
        fontSize: '20px',
        color: "#f0f0f0",
        fontWeight: '500',
        cursor: 'pointer',
    },
})