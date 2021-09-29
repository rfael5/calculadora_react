import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

//Se você não usar o export default, você tem que colocar o elemento exportado entre chaves.
import Multi, {BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


/*Com o ReactDOM.render, nós passamos dois parâmetros.
- O primeiro parâmetro é o elemento que você quer renderizar, nesse caso um h1 com o texto "React"
- No segundo parâmetro você define dentro de qual elemento o primeiro parâmetro deve ser renderizado. Nesse
caso, vamos renderizar o h1 na div com id "root".

Os elementos do segundo parâmetro, como o id "root", são encontrados no arquivo index.html dentro da pasta public.*/

//const elemento = <h1>React</h1>
//ReactDOM.render(elemento, document.getElementById("root"));

/*Uma das coisas que o React permite é misturar duas tecnologias diferentes em um só arquivo, como fizemos acima.
Escrevemos uma linha que parece html e vamos renderizá-la usando javascript. 
Com javascript puro isso não seria permitido, mas a biblioteca do react nos permite fazer isso.
Na verdade aquele elemento h1 não é html, é um JSX, e o react executa comandos por baixo dos panos para transformar esse
elemento em html e mostrá-lo na página.*/

//_____________________________________________________________________________________________________________________

//ReactDOM.render(<Primeiro />, document.getElementById("root"));

//______________________________________________________________________________________________________________________

//ReactDOM.render(<BomDia nome="Guilherme" />, document.getElementById("root"));

//_______________________________________________________________________________________________________________________

/*ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="João" />
        <BoaNoite nome="Maria" />
    </div>, 
    document.getElementById("root"));
*/

//_______________________________________________________________________________________________________________________

/*ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
        
    </div>, 
    document.getElementById("root"));
*/

//________________________________________________________________________________________________________________________

ReactDOM.render(
    <div>
        <Pai nome="Fulano" sobrenome="da Silva">

            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />

        </ Pai>
        
    </div>, 
    document.getElementById("root"));



