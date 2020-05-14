import React, { Component } from 'react'
import Temperature from './temperature/Temperatur'
import Volume from './volume/Volume'

export class UnitConversion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tempScaleOptions : ["kelvine", "Fahrenheit", "Celsius", "Rankine"],
            volumeScaleOptions: ["Liters", "Tablespoons", "Cubic-Inches", "Cups", "Cubic-Feet",  "Gallons"],
            inputValue: 0,
            convertedFrom: "",
            convertedTo: "",
            convertedResult: 0,
            studentAnswer: 0,
            initialVolumInput: 0,
            checkedAnswer: false,
            volumeInput: 0,
            volStudentAns: 0
            
        }
    }

    inputChangeHandler =(event) => {
        this.setState({inputValue: event.target.value})
        console.log(this.state.inputValue)
    }
    
    changedFromHandler = (selectedFrom) => {
        this.setState({convertedFrom: selectedFrom})
        console.log( "selected From = " + selectedFrom)
    }

    changedToHandler =(selectedTo) => {
        this.setState({convertedTo: selectedTo})
        console.log("selected to = " + selectedTo)
    }

    convertHandler = ()=>{
        let tempResult = 0;
        let initialVal = parseFloat(this.state.inputValue)

        if(this.state.convertedFrom === this.state.convertedTo){
            tempResult = initialVal

        }if (this.state.convertedFrom === "kelvine" && this.state.convertedTo === "Fahrenheit"){
            tempResult = ((initialVal * (9/5)) - 459.67)
        } if (this.state.convertedFrom === "Fahrenheit" &&  this.state.convertedTo === "kelvine"){
            tempResult = (( initialVal + 460  ) * (5/9))
        } if (this.state.convertedFrom === "kelvine" &&  this.state.convertedTo === "Celsius"){
            tempResult = ( initialVal - 273.15 )
        } if (this.state.convertedFrom === "Celsius" &&  this.state.convertedTo === "kelvine"){
            tempResult = ( initialVal + 273.15 )

        } if (this.state.convertedFrom === "kelvine" &&  this.state.convertedTo === "Rankine"){
        tempResult = ( initialVal *9/5 )
    }
    if (this.state.convertedFrom === "Rankine" &&  this.state.convertedTo === "kelvine"){
        tempResult = ( initialVal * 5/9 )

    } if (this.state.convertedFrom === "Fahrenheit" &&  this.state.convertedTo === "Celsius"){
        tempResult = ( initialVal -32  ) * 5/9
    } if (this.state.convertedFrom === "Celsius" &&  this.state.convertedTo === "Fahrenheit"){
        tempResult = (( initialVal * 9/5 ) + 32)
    } 
    if (this.state.convertedFrom === "Fahrenheit" &&  this.state.convertedTo === "Rankine"){
        tempResult = ( initialVal + 459.67 ) 
    } if (this.state.convertedFrom === "Rankine" &&  this.state.convertedTo === "Fahrenheit"){
        tempResult = ( initialVal - 459.67) 
    } 
    if (this.state.convertedFrom === "Celsius" &&  this.state.convertedTo === "Rankine"){
        tempResult = (( initialVal +273.15) *9/5)
    } if (this.state.convertedFrom === "Rankine" &&  this.state.convertedTo === "Celsius"){
        tempResult = ( (initialVal - 491.67) *5/9)
    }
    
      let rounded = Number((tempResult).toFixed(2))
    this.setState({convertedResult: rounded}, ()=> {
       console.log( "Result " + this.state.convertedResult)
            })
        }

        handleStudentAnswer =(e) => {
            this.setState({studentAnswer: e.target.value})
            console.log( "student answer" + this.state.studentAnswer)
        }
  
        comparisionHandler =()=>{
            let final = this.state.checkedAnswer;
            let val1 = parseFloat(this.state.convertedResult);
            let val2 = parseFloat(this.state.studentAnswer);
            if(val1 === val2) {
               alert('coreect')
            }else {
               alert('incorrect')
            }
            this.setState({checkedAnswer: final})
                   
        }

        volumInputHandle =(e)=>{
            this.setState({initialVolumInput: e.target.value})
            console.log("entered volume" + this.state.initialVolumInput)
        }
        volumeConvertionHandler =()=>{
           
        }

    render() {
        return (
            <div className="container">
                <div  className= "row">
                <Temperature scales ={this.state.tempScaleOptions}
                inputHandle = {this.inputChangeHandler}
                changedFrom={(e) => this.changedFromHandler(e.target.value)}
                ChangedTo={(e) => this.changedToHandler(e.target.value)}
                converted={this.convertHandler}
                answerHandled={this.handleStudentAnswer}
                compared={this.comparisionHandler}/>
               
                </div>

               <div>{this.state.convertedResult}</div>
                <div  className= "row">
                <Volume volScales={this.state.volumeScaleOptions}
                inputChaged={this.volumInputHandle}
                converted={this.volumeConvertionHandler}/>
              
                </div>
            </div>
        )
    }
}

export default UnitConversion
