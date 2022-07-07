/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega/>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}/>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input/>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai/>
            </Card>

            <Card titulo="#9 - Comunicação Direta" color="#59323C">
                <DiretaPai/>
            </Card>

            <Card titulo="#8 - Condicional" color="#982395">
                <ParOuImpar numero={21}/>
                <UsuarioInfo usuario={{ nome: 'Fernando'}}/>
                <UsuarioInfo usuario={{ email: 'fer@gmail.com'}}/>
            </Card>

            <Card titulo="#7 - Tabela" color="#3A9AD9">
                <TabelaProdutos/>
            </Card>

            <Card titulo="#6 - Repetição" color="#FF4C65">
                <ListaAlunos/>
            </Card>

            <Card titulo="#5 - Componente Com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira" >
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#4 - Componente Aleatorio" color="#FA6900">
                <Aleatorio valMin={1} valMax={1000}/>
            </Card>

            <Card titulo="#3 - Componente Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Segundo Componente" color="#E8B71A">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Deu certo!!!"
                />
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>

        </div>
    </div>
);

