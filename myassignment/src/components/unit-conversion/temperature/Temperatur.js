import React from 'react'

const Temperature = (props) => {
    const scaleOptionList = props.scales
    .map((option) => {
    return <option key ={option}>{option}</option>
    })
    return (
        <div>
            <h3>Temperature Conversion</h3>
            <input type ="number" placeholder ="Enter The Value " />
            {/* //pupulating the unit to the input filed */}
            <select>
                <option>...From...</option>
                {scaleOptionList}

            </select>
            <select>
                <option>...To...</option>
                {scaleOptionList}
            </select>

        </div>
    )
}

export default Temperature
