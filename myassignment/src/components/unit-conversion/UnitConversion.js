import React, { Component } from 'react'
import Temperature from './temperature/Temperatur'
import Volume from './volume/Volume'

export class UnitConversion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tempScaleOptions : ["kelvine", "Fahrenheit", "Celsius", "Rankine"],
        }
    }
    
    render() {
        return (
            <div className="container">
                <div  className= "row">
                <Temperature scales ={this.state.tempScaleOptions}/>
                </div>
                <div  className= "row">
                <Volume/>
                </div>
            </div>
        )
    }
}

export default UnitConversion
