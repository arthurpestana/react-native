import React, { useState } from 'react'
import {Button, View, } from 'react-native'

import MineField from './MineField'
import styles from '../styles/style_app'

export default (props) => {

    let quant_bombs = 10
    let tam = 10
    let alt_color = 0 
    let row_color = 0
    let bombs = []
    let init_game = false

    field_game = []

    if (props.difficult == 1) {
        quant_bombs = 10
        tam = 10
    }

    randomBombs = () => {
        let bomb_x
        let bomb_y
        let posi

        for (i=0; i<quant_bombs; i++) {
            bomb_x = Math.floor(Math.random() * ((tam-1)-0+1)+0)
            bomb_y = Math.floor(Math.random() * ((tam-1)-0+1)+0)
            bombs.push(`${bomb_x},${bomb_y}`)
            posi = Number(`${bomb_x}${bomb_y}`)
            field_game[posi] = <MineField text_field={text_field} onClick={clickField} bombs={true} x={bomb_x} y={bomb_y}/>
            console.warn(bomb_x, bomb_y)
        }
    }

    verifyCoord = (i, j) => {
        if (i >= 0 & i < tam & j >=0 & j < tam) {
            return true
        }
        else {
            return false
        }
    }

    verifyBomb = (i, j) => {
        if (verifyCoord(i, j)) {
            if (bombs.includes(`${i},${j}`)) {
                return 1
            }
            else {
                return 0
            }
        }
        return 0
    }

    contBombsAround = (i, j) => {
        let quant = 0
        quant += verifyBomb(i-1, j-1)
        quant += verifyBomb(i-1, j)
        quant += verifyBomb(i, j-1)
        quant += verifyBomb(i-1, j+1)
        quant += verifyBomb(i+1, j-1)
        quant += verifyBomb(i, j+1)
        quant += verifyBomb(i+1, j)
        quant += verifyBomb(i+1, j+1)
        return quant
    }

    const [text_field, setTextField] = useState("")

    clickField = (x,y,value) => {
        let posi = Number(`${x}${y}`)
        if (value) {
            console.warn("Você perdeu!!")
            setTextField("X")
        }
        else {
            console.warn(contBombsAround(x,y))
        }
    }

    createField = () => {
        for (let i=0; i<tam; i++) {
            for (let j=0; j<tam; j++) {
                if (row_color==0) {
                    if (alt_color==0) {
                        field_game.push(<MineField text_field={text_field} onClick={clickField} bombs={false} x={i} y={j}/>)
                        alt_color=1
                    }
                    else {
                        field_game.push(<MineField text_field={text_field} onClick={clickField} bombs={false} alt_color x={i} y={j}/>)
                        alt_color=0
                    }
                }
                else {
                    if (alt_color==0) {
                        field_game.push(<MineField text_field={text_field} onClick={clickField} bombs={false} x={i} y={j}/>)
                        alt_color=1
                    }
                    else {
                        field_game.push(<MineField text_field={text_field} onClick={clickField} bombs={false} alt_color x={i} y={j}/>)
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
    }

    renderField = (button_field) => {
        return button_field
    }

    startGame = () => {
        init_game = true
        createField()
        randomBombs()
    }

    startGame()

    return (
        <React.Fragment>
            {field_game.map(renderField)}
        </React.Fragment>
    )
}