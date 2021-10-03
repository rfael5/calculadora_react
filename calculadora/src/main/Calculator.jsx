import React, { Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    state = {...initialState}

    //função que irá voltar a calculadora para seu estado inicial.
    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if(this.state.current = 0) {
            /*Caso o valor sendo operado seja o valor de índice 0 na lista, serão setados os seguintes valores:
            - operations será o valor de operação passado na calculadora.
            - current mudará para o índice 1 em values, e values[1] será o valor que passará a sofrer mudanças.
            -  clearDisplay passará a ser true, e o valor no display será zerado.*/
            this.setState( {operation, current: 1, clearDisplay:true} )
        } else {
            /*Caso o valor sendo operado seja o 1:
            1- a variável equals recebe o valor de operations, que será o valor '='*/ 
            const equals = operation === '='

            //2- A variável currentOperation recebe o valor da operação sendo feita no momento.
            const currentOperation = this.state.operation

            //3- A variável values recebe um clone do array em state.values
            const values = [...this.state.values]

            try {
                //4- values[0] receberá a operação realizada entre o valor anterior de values[0] e de values[1].
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}` )
                
                //Se o resultado enviado para values[0] for NaN, a memória será zerada.
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                return
                }
            } catch(e) {
                //Caso o try funcione, values[0] receberá o valor da operação normalmente
                values[0] = this.state.values[0]
            }

            //5- values[1] voltará a ser 0
            values[1] = 0

            //6- Após os valores terem sido modificados nas operações acima, os seguintes valores serão setados pelo setState(): 
            this.setState({
                //O valor mostrado no display será o de values[0].
                displayValue: values[0],
                
                //Caso equals - que tem o valor '='- exista, operation terá o valor nulo.
                //Caso seja um valor diferente de equals, operation receberá o valor da operação passado na calculadora. 
                operation: equals ? null : operation,

                //Caso equals exista, o valor a ser modificado será o values[0], caso contrário, será o 1.
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values 
            })

        }
    }

    addDigit(n) {
        if(n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue ==='0' 
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay:false})

        //caso n seja algum valor diferente de '.'
        if (n !== '.') {
            //1- a variável i recebe o valor de current, ou seja, 0 ou 1
            const i = this.state.current

            //2- a variável newValue recebe o valor de displayValue transformado em um valor numérico flutuante.
            const newValue = parseFloat(displayValue)

            //3- a variável values recebe um clone do array de state.values.
            const values = [...this.state.values]

            //4- newValue será atribuido a um dos valores do array de value. 
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {        

        return (
            <div className="calculator">

                <Display value={this.state.displayValue} />
                <Button label="AC" click = {this.clearMemory} triple />
                <Button label="/" click = {this.setOperation} operation/>
                <Button label="7" click = {this.addDigit} />
                <Button label="8" click = {this.addDigit}/>
                <Button label="9" click = {this.addDigit}/>
                <Button label="*" click = {this.setOperation} operation/>
                <Button label="4" click = {this.addDigit} />
                <Button label="5" click = {this.addDigit}/>
                <Button label="6" click = {this.addDigit}/>
                <Button label="-" click = {this.setOperation} operation/>
                <Button label="1" click = {this.addDigit}/>
                <Button label="2" click = {this.addDigit} />
                <Button label="3" click = {this.addDigit}/>
                <Button label="+" click = {this.setOperation} operation/>
                <Button label="0" click = {this.addDigit} double/>
                <Button label="." click = {this.addDigit}/>
                <Button label="=" click = {this.setOperation} operation/>

            </div>
        )
    }
}