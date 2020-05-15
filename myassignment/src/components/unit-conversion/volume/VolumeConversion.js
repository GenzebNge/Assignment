import React, { Component } from "react";
import Volume from './Volume'

export class VolumeConversion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volScaleOptions: ["Liters", "Tablespoons", "Cubic-Inches", "Cups", "Cubic-Feet",  "Gallons" ],
      volInputValue: 0,
      convertedFrom: "",
      convertedTo: "",
      convertedResult: 0,
      studentAnswer: 0,
    };
  }

  volInputHandler = (event) => {
    this.setState({ volInputValue: event.target.value });
    console.log("volume in pu = " + this.state.volInputValue);
  };

  changedFromHandler = (selectedFrom) => {
    this.setState({ convertedFrom: selectedFrom });
    console.log("selected From = " + selectedFrom);
  };

  changedToHandler = (selectedTo) => {
    this.setState({ convertedTo: selectedTo });
    console.log("selected to = " + selectedTo);
  };

  convertHandler = () => {
    let tempResult = 0;
    let initialVal = parseFloat(this.state.volInputValue);

    if (this.state.convertedFrom === this.state.convertedTo) {
      tempResult = initialVal;
    }
    if (
      this.state.convertedFrom === "Liters" &&
      this.state.convertedTo === "Tablespoons"
    ) {
      tempResult = initialVal * 67.63;
    }
    if (
      this.state.convertedFrom === "Tablespoons" &&
      this.state.convertedTo === "Liters"
    ) {
      tempResult = initialVal/67.63;
    }
    if (
      this.state.convertedFrom === "Liters" &&
      this.state.convertedTo === "Cubic-Inches"
    ) {
      tempResult = initialVal * 61
    }
    if (
      this.state.convertedFrom === "Cubic-Inches" &&
      this.state.convertedTo === "Liters"
    ) {
      tempResult = initialVal/61
    }
    if (
      this.state.convertedFrom === "Liters" &&
      this.state.convertedTo === "Cups"
    ) {
      tempResult = alert( "not implemented yet")
    }
    if (
      this.state.convertedFrom === "Cups" &&
      this.state.convertedTo === "Liters"
    ) {
      tempResult = alert( "not implemented yet")
    }
    if (
      this.state.convertedFrom === "Liters" &&
      this.state.convertedTo === "Cubic-Feet"
    ) {
      tempResult = alert( "not implemented yet")
    }
    if (
      this.state.convertedFrom === "Cubic-Feet" &&
      this.state.convertedTo === "Liters"
    ) {
      tempResult = alert( "not implemented yet")
    }
    if (
      this.state.convertedFrom === "Liters" &&
      this.state.convertedTo === "Gallons"
    ) {
      tempResult = alert( "not implemented yet")
    }
    if (
      this.state.convertedFrom === "Gallons" &&
      this.state.convertedTo === "Liters"
    ) {
      tempResult = alert( "not implemented yet")
    }
    if (
      this.state.convertedFrom === "Tablespoons" &&
      this.state.convertedTo === "Cubic-Inches"
    ) {
      tempResult = alert( "not implemented yet")
    }
    if (
      this.state.convertedFrom === "Cubic-Inches" &&
      this.state.convertedTo === "Tablespoons"
    ) {
      tempResult = alert( "not implemented yet")
    }

    let rounded = Number(tempResult.toFixed(2));
    this.setState({ convertedResult: rounded }, () => {
      console.log("Result " + this.state.convertedResult);
    });
  };

  handleStudentAnswer = (e) => {
    this.setState({ studentAnswer: e.target.value });
    console.log("student answer" + this.state.studentAnswer);
  };

  comparisionHandler = () => {
    let final = this.state.checkedAnswer;
    let val1 = parseFloat(this.state.convertedResult);
    let val2 = parseFloat(this.state.studentAnswer);
    if (val1 === val2) {
      alert("coreect");
    } else {
      alert("incorrect");
    }
    this.setState({ checkedAnswer: final });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Volume volScales={this.state.volScaleOptions}
            inputChaged={this.volInputHandler}
            changedFrom={(e) => this.changedFromHandler(e.target.value)}
            ChangedTo={(e) => this.changedToHandler(e.target.value)}
            converted={this.convertHandler}
            answerHandled={this.handleStudentAnswer}
            compared={this.comparisionHandler}
          />
        </div>
        <span><a href="/">Back</a></span>
      </div>
    );
  }
}

export default VolumeConversion;
