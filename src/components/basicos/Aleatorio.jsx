import React from 'react'

export default (props) => {
    const { valMin, valMax } = props
    const valAleatorio = parseInt(Math.random() * (valMax - valMin) + valMin)
    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <h3>Valor Entre { valMin } e { valMax }</h3>
            <h3>{ valAleatorio }</h3>
        </div>
    )
}