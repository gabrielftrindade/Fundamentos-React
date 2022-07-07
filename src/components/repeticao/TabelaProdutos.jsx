import './TabelaProdutos.css'
import React from 'react'
import produtos from '../data/produtos'

export default () => {
    const produtosLI = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.valor}</td>
            </tr>
        )
    })
    return (
        <div className='TabelaProdutos'>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    { produtosLI }
                </tbody>
            </table>
        </div>
    )
}