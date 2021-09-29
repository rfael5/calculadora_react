import React from 'react'

/*Para você criar duas tags uma seguida da outra como fizemos com o h1 e o h2, ou você as coloca
dentro de uma tag que envolve tudo, como uma div; ou você as envolve com o Fragment, ou você as coloca em uma lista.

Temos os três exemplos abaixo.

O React não deixa você renderizar mais de uma tag de outra forma.*/

export default props => 
    //Essa forma, com divs, é a mais comum
    <div>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div>


/*
//Caso você use uma lista, cada elemento da lista deve ter uma key propria.
export default props => [
    <h1 key="h1">Bom dia, {props.nome}!</h1>,
    <h2 key="h2">Até breve!</h2>
]

export default props =>
    <React.Fragment>

        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve!</h2>

    </React.Fragment> 
*/
