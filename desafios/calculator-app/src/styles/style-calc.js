import React from 'react'
import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    calc__box: {
        width: `100%`,
        height: `100%`,
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
        height: '10vh',
        borderRadius: 20,
        backgroundColor: '#2e2e30',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 20,
    },

    display__text: {
        fontSize: 20,
        color: '#f0f0f0',
        fontWeight: 400,
    },

    calc__buttonBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
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
        margin: 5,
    },

    button__text: {
        fontSize: '20px',
        color: "#f0f0f0",
        fontWeight: '500',
        cursor: 'pointer',
    }
})