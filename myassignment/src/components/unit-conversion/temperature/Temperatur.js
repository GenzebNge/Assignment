import React from "react";
import './Temperature.css'

const Temperature = (props) => {
  const scaleOptionList = props.scales.map((option) => {
    return <option key={option}>{option}</option>;
  });
  return (
    <div>
      <h3>Temperature Unit Conversion</h3>
      <form>
        <label>Initial Temperature: </label>
        <input className="input" 
          type="number"
          placeholder="Enter The Value "
          onChange={props.inputHandle}
        />

        <select className ="select"onChange={props.changedFrom}>
          <option>...From...</option>
          {scaleOptionList}
        </select>
        <select className="select" onChange={props.ChangedTo}>
          <option>...To...</option>
          {scaleOptionList}
        </select>
      </form>
      <button className="Button" onClick={props.converted}> Convert </button>
     
      <div className="row">
      <input type="number" placeholder="Enter Student Answer" onChange={props.answerHandled}/>
      <select className="select" onChange={props.ChangedTo}>
          <option>...In...</option>
          {scaleOptionList}
        </select>
      <br/>
      <button className="Btnc" onClick={props.compared}>Clicke To Check </button>
      </div>
     
    </div>
  );
};

export default Temperature;
