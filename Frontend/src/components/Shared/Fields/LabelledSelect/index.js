import React from 'react';
import PropTypes from 'prop-types';

import Label from "../Label";

const LabelledSelect = ({
    label,
    values,
}) => {
  
    return (
        <div className="LabelledSelect">
            <Label text={label} />
            <select>
                {values.map((value, index) => 
                    <option key={index}>{value}</option>
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
    values: PropTypes.arrayOf(PropTypes.string),
}

export default LabelledSelect;
