import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    handleClick(key) {

        switch(key.target.value) {
            case "=":
                this.displayResult();
                break;
            case "C":
                this.restoreState();
                break
            case "CE":
                this.delete();
                break;
            default:
                this.setState({
                    result: this.state.result + key.target.value
                });
                break;
        }
    };


    displayResult() {
        this.setState({
            result: eval(this.state.result)
        })
    };

    restoreState() {
        this.setState({
            result: ""
        })
    };

    delete() {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Calculator</h1>

                    <div className="result">
                        <p>{this.state.result}</p>
                    </div>

                    <div className="keypad">
                        <button value="(" onClick={this.handleClick.bind(this)}>(</button>
                        <button value="CE" onClick={this.handleClick.bind(this)}>CE</button>
                        <button value=")" onClick={this.handleClick.bind(this)}>)</button>
                        <button value="C" onClick={this.handleClick.bind(this)}>C</button><br/>


                        <button value="1" onClick={this.handleClick.bind(this)}>1</button>
                        <button value="2" onClick={this.handleClick.bind(this)}>2</button>
                        <button value="3" onClick={this.handleClick.bind(this)}>3</button>
                        <button value="+" onClick={this.handleClick.bind(this)}>+</button><br/>


                        <button value="4" onClick={this.handleClick.bind(this)}>4</button>
                        <button value="5" onClick={this.handleClick.bind(this)}>5</button>
                        <button value="6" onClick={this.handleClick.bind(this)}>6</button>
                        <button value="-" onClick={this.handleClick.bind(this)}>-</button><br/>

                        <button value="7" onClick={this.handleClick.bind(this)}>7</button>
                        <button value="8" onClick={this.handleClick.bind(this)}>8</button>
                        <button value="9" onClick={this.handleClick.bind(this)}>9</button>
                        <button value="*" onClick={this.handleClick.bind(this)}>x</button><br/>


                        <button value="." onClick={this.handleClick.bind(this)}>.</button>
                        <button value="0" onClick={this.handleClick.bind(this)}>0</button>
                        <button value="=" onClick={this.handleClick.bind(this)}>=</button>
                        <button value="/" onClick={this.handleClick.bind(this)}>/</button><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
