import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

import Calculadora from './desafios/calculadora-app/Calculadora'
//import Mega from './src/components/mega/Mega'
//import FlexboxV4 from './src/components/layout/FlexboxV4'
//import FlexboxV3 from './src/components/layout/FlexboxV3'
//import FlexboxV2 from './src/components/layout/FlexboxV2'
//import FlexboxV1 from './src/components/layout/FlexboxV1'
//import DigiteSeuNome from './src/components/DigiteSeuNome'
//import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2'
//import ListaProdutos from './src/components/produtos/ListaProdutos'
//import UsuarioLogado from './src/components/UsuarioLogado'
//import Familia from './src/components/relacao/Familia'
//import Membro from './src/components/relacao/Membro'
//import ParImpar from './src/components/ParImpar'
//import Diferenciar from './src/components/Diferenciar'
//import ContadorV2 from './src/components/contador/ContadorV2'
//import PaiIndireta from './src/components/indireta/Pai'
//import PaiDireta from './src/components/direta/Pai'
//import Contador from './src/components/Contador'
//import Botao from './src/components/Botao'
//import Titulo from './src/components/Titulo'
//import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'
//import Primeiro from './src/components/Primeiro'
//import MinMax from './src/components/MinMax'
//import Aleatorio from './src/components/Aleatorio'

export default () => (
  <SafeAreaView style={style.App}>
    <StatusBar
      barStyle = "dark-content"
      hidden = {false}
      backgroundColor = "#0066CC"
      translucent = {false}
      networkActivityIndicatorVisible = {true}
    />
    <Calculadora/>
    {/*
    <Mega qntnumeros={10}/>
    <FlexboxV4 />
    <FlexboxV3 />
    <FlexboxV2 />
    <FlexboxV1 />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos  />
    <UsuarioLogado usuario={{nome: "Gui", email: "gui@gmail.com"}} />
    <UsuarioLogado usuario={{nome: "Ana"}} />
    <UsuarioLogado usuario={{email: "carlitos@gmail.com"}} />
    <UsuarioLogado usuario={null} />
    <Familia>
      <Membro nome="Julia" sobrenome="Arruda"/>
      <Membro nome="Carlos" sobrenome="Arruda"/>
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Beatriz" sobrenome="Silva" />
    </Familia>
    <ParImpar num={10} />
    <Diferenciar></Diferenciar>
    <ContadorV2></ContadorV2>
    <PaiIndireta />
    <PaiDireta />
    <Contador num={100} quant={5}/>
    <Contador/>
    <Botao />
    <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro de Produto"/>
    <Aleatorio numMax={1} numMin={20} />
    <MinMax min={3} max={21} />
    <MinMax min={5} max={45} />  
    <CompPadrao/>
    <Comp1/>
    <Comp2/>
    <Text>{1+1}</Text>
    <Primeiro />
    */}
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
