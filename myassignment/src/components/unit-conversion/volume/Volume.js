import React from "react";


const Volume = (props) => {
 const volScalesOptionLists = props.volScales.map(option =>{
 return <option key={option}>{option}</option>
 })
        
  return (
    <div>
      <h3>Volume unit Conversion</h3>
      <form>
        <label>Initial Volume: </label>
        <input className="volinput" type="number" placeholder="Enter The Initial Volume" onChange={props.inputChaged}
        />
        <select onChange={props.changedFrom}>
            <option>...From...</option>
            {volScalesOptionLists}
        </select>

        <select onChange= {props.ChangedTo}>
            <option>...TO...</option>
            {volScalesOptionLists}
        </select>
      </form>
      <button onClick={props.converted}>click Here to Convert </button>
      <div>
        <input type="number" placeholder="Student Answer" onChange = {props.answerHandled} />
      </div>
    </div>
  );
};
export default Volume;
