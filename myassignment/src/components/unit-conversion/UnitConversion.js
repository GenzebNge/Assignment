import React, { Component } from 'react'
import Temperature from './temperature/Temperatur'
import Volume from './volume/Volume'

export class UnitConversion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tempScaleOptions : ["kelvine", "Fahrenheit", "Celsius", "Rankine"],
            inputValue: 0,
            convertedFrom: "",
            convertedTo: "",
        }
    }

    inputChangeHandler =(event) => {
        this.setState({inputValue: event.target.value})
        console.log(this.state.inputValue)
    }
    
    changedFromHandler = (selectedFrom) => {
        this.setState({convertedFrom: selectedFrom})
        console.log(this.state.convertedFrom)
    }

    changedToHandler =(selectedTo) => {
        this.setState({convertedTo: selectedTo})
        console.log(this.state.convertedTo)
    }

    render() {
        return (
            <div className="container">
                <div  className= "row">
                <Temperature scales ={this.state.tempScaleOptions}
                inputHandle = {this.inputChangeHandler}
                changedFrom={this.changedFromHandler}
                ChangedTo={this.changedToHandler}/>
                </div>
                <div  className= "row">
                <Volume/>
                </div>
            </div>
        )
    }
}

export default UnitConversion
