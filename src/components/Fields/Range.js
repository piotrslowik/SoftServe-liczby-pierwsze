import React from 'react';

const Range = ({
    label,
    min,
    max,
    }) => {
    
    return (
        <div className="Range">
            <label>{label}</label>
            <input type="number" placeholder="od"></input>
            <input type="number" placeholder="do"></input>
        </div>
    )
}

export default Range;