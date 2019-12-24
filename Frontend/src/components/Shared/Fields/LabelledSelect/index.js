import React from 'react';
import PropTypes from 'prop-types';

import Label from "../Label";

const LabelledSelect = ({
    label,
    values,
    onChange,
}) => {

    const handleChange = event => {
        const value = values.find(el => el.text === event.target.value);
        onChange(value);
    }
  
    return (
        <div className="LabelledSelect">
            <Label text={label} />
            <select onChange={handleChange}>
                {values.map(value => 
                    <option key={value.id}>{value.text}</option>
                )}
            </select>
        </div>
    )
}

LabelledSelect.defaultProps = {
    label: '',
    values: [],
}

LabelledSelect.propTypes = {
    label: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
    })),
}

export default LabelledSelect;
