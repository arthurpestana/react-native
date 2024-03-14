import React from 'react'
import {Button, View, } from 'react-native'

import MineField from './MineField'
import styles from '../styles/style_app'

export default (props) => {

    let quant_bombs = 10
    let tam = 10
    let alt_color = 0 
    let row_color = 0

    field_game = []

    if (props.difficult == 1) {
        bombs = 10
        tam = 10
    }

    mineBomb = (x, y) => {
        console.warn(props.x, props.y)
        console.warn("Você perdeu!")
    }

    randomBombs = () => {
        let bomb_x
        let bomb_y
        let bombs = []

        for (i=0; i<quant_bombs; i++) {
            bomb_x = Math.floor(Math.random() * ((tam-1)-0+1)+0)
            bomb_y = Math.floor(Math.random() * ((tam-1)-0+1)+0)
            bombs.push(`${bomb_x}, ${bomb_y}`)
            field_game[bomb_x][bomb_y] = <MineField x={bomb_x} y={bomb_y} bombs/>
            console.warn(bomb_x, bomb_y)
        }
    }

    verifyCoord = (i, j) => {
        if (i >= 0 & i < tam * j >=0 & j < tam) {
            return true
        }
        else {
            return false
        }
    }

    verifyBomb = (i, j) => {
        if (verifyCoord(i, j)) {
            if (`${i},${j}` in bombs) {
                
            }
        }
        return false
    }

    contBombsAround = () => {
        let quant = 0
        for (i=0; i<tam; i++) {
            for (j=0; j<=tam; j++) {
                quant += verifyBomb(i, j)
            }
        }
    }

    for (let i=0; i<tam; i++) {
        for (let j=0; j<tam; j++) {
            if (row_color==0) {
                if (alt_color==0) {
                    field_game.push(<MineField x={i} y={j}/>)
                    alt_color=1
                }
                else {
                    field_game.push(<MineField alt_color x={i} y={j}/>)
                    alt_color=0
                }
            }
            else {
                if (alt_color==0) {
                    field_game.push(<MineField x={i} y={j}/>)
                    alt_color=1
                }
                else {
                    field_game.push(<MineField alt_color x={i} y={j}/>)
                    alt_color=0
                }
            }
        }
        if (row_color==0) {
            row_color = 1
            alt_color = 1
        }
        else {
            row_color = 0
            alt_color = 0
        }
    }

    renderField = (button_field) => {
        return button_field
    }

    randomBombs()

    return (
        <React.Fragment>
            {field_game.map(renderField)}
        </React.Fragment>
    )
}