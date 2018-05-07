import React, { Component } from 'react';

class Calculater extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            operater: null,
            result: 0
        }
    }
    plus(){
        this.setState({operater: 'plus'})
        this.setState({result: this.state.number1 + this.state.number2})
    }
    minus(){
        this.setState({operater: 'minus'})
    }
    mul(){
        this.setState({operater: 'mul'})
    }
    share(){
        this.setState({operater: 'share'})
    }
    result(){
        if(this.state.operater == 'plus'){
            this.setState({result: this.state.number1 + this.state.number2})
        }
        if(this.state.operater == 'minus'){
            this.setState({result: this.state.number1 - this.state.number2})
        }
        if(this.state.operater == 'mul'){
            this.setState({result: this.state.number1 * this.state.number2})
        }
        if(this.state.operater == 'share'){
            this.setState({result: this.state.number1 / this.state.number2})
        }
    }

    handleNumber1(event){
        this.setState({number1: parseInt(event.target.value)})
    }
    handleNumber2(event){
        this.setState({number2: parseInt(event.target.value)})
    }

    render(){
        return(
            <div>
                <h1> this calculater</h1>
                <input onChange={this.handleNumber1.bind(this)}/><br />
                <input onChange={this.handleNumber2.bind(this)}/><br />
                {this.props.plus ? <button onClick={this.plus.bind(this)}>+</button> : null}
                <button onClick={this.minus.bind(this)}>-</button>
                <button onClick={this.mul.bind(this)}>*</button>
                <button onClick={this.share.bind(this)}>/</button>
                
                <button onClick={this.result.bind(this)}> = </button>
                <br />
                <h1>Number1: {this.state.number1}</h1>
                <h1>Number2: {this.state.number2}</h1>
                <h1>result: {this.state.result}</h1>
            </div>
        )
    }
}
export default Calculater;