import React from "react";
import './Volume.css'

const Volume = (props) => {
    const volScalOptionList = props.volScales
    .map(option =>{
    return <option key={option}>{option}</option>
    })
  return (
    <div>
      <h3>Volume unit Conversion</h3>
      <form>
        <label>Initial Volume: </label>
        <input className="input" type="number" placeholder="Enter The initial Volume" onChange={props.inputChaged}/>
        <select>
            <option>...From...</option>
            {volScalOptionList}
        </select>

        <select>
            <option>...TO...</option>
            {volScalOptionList}
        </select>
      </form>
      <button onClick={props.converted}>Clicke to convert</button>
    </div>
  );
};
export default Volume;
