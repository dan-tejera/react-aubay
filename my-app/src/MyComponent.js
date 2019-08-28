import React, { Component } from 'react';

const InitState = 0;
const FirstFigureState = 1;
const SecondFigureState = 2;
const ResultState = 3;

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {display: ''};
        this.currentState = InitState;
        
        this.FirstFigure = 0;
        this.SecondFigure = 0;
        this.Result = 0;
        this.operator = '';
    }
    
    handleClick(symbol){

        this.setState({display: this.state.display + symbol})
    }

    handleNumber(num){
        
        switch(this.currentState){
            case InitState:
                this.FirstFigure = num;
                this.currentState = FirstFigureState;
                this.setState({display: this.state.display + num})
            break;
            case FirstFigureState:
                this.FirstFigure = this.FirstFigure * 10 + num;
                this.currentState = FirstFigureState;
                this.setState({display: this.state.display + num})
            break;
            case SecondFigureState:
                this.SecondFigure = this.SecondFigure * 10 + num;
                this.currentState = FirstFigureState;
                this.setState({display: this.state.display + num})
            break;
            case ResultState:
                
            break;
        }

        
    }
    render() {
        return (
            <div>

                <h4>{this.state.display}</h4>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={() => this.handleNumber(7)}>7</button></td>
                            <td><button onClick={() => this.handleNumber(8)}>8</button></td>
                            <td><button onClick={() => this.handleNumber(9)}>9</button></td>
                            <td><button onClick={() => this.handleClick('/')}>/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleNumber(4)}>4</button></td>
                            <td><button onClick={() => this.handleNumber(5)}>5</button></td>
                            <td><button onClick={() => this.handleNumber(6)}>6</button></td>
                            <td><button onClick={() => this.handleClick('*')}>*</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleNumber(1)}>1</button></td>
                            <td><button onClick={() => this.handleNumber(2)}>2</button></td>
                            <td><button onClick={() => this.handleNumber(3)}>3</button></td>
                            <td><button onClick={() => this.handleClick('-')}>-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.handleClick('.')}>.</button></td>
                            <td><button onClick={() => this.handleNumber(0)}>0</button></td>
                            <td><button onClick={() => this.handleClick('=')}>=</button></td>
                            <td><button onClick={() => this.handleClick('+')}>+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyComponent;