import React from 'react'

const Temperature = (props) => {
    const scaleOptionList = props.scales
    .map((option) => {
    return <option key ={option}>{option}</option>
    })
    return (
        <div>
            <h3>Temperature Conversion</h3>
            <input type ="number" placeholder ="Enter The Value " onChange={props.inputHandle} />
            {/* //pupulating the unit to the input filed */}
            <select onChange={(e)=>props.changedFrom(e.target.value)}>
                <option>...From...</option>
                {scaleOptionList}

            </select>
            <select onChange={(e) =>props.ChangedTo(e.target.value)}>
                <option>...To...</option>
                {scaleOptionList}
            </select>

        </div>
    )
}

export default Temperature
