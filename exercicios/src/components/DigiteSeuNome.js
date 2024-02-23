import React, {useState} from 'react'
import {Text, SafeAreaView, TextInput} from 'react-native'
import Estilo from './estilo'

export default (props) => {
    const [nome, setNome] = useState("Teste")
    return (
        <SafeAreaView>
            <Text>{nome}</Text>
            <TextInput 
                placeholder='Digite o seu nome' 
                value={null}
                onChangeText={nome => setNome(nome)}
            />
        </SafeAreaView>
    )
}