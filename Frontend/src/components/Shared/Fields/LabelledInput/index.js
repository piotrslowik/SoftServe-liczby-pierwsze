import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

const LabelledInput = ({
    label,
    type,
    onChange,
    value,
    placeholder,
    min,
    max,
}) => {
  
    return (
        <div className="LabelledInput">
            <Label text={label} />
            <input type={type} onChange={onChange} value={value} placeholder={placeholder} min={min} max={max} />
        </div>
    )
}

LabelledInput.defaultProps = {
    label: '',
    type: 'text',
    onChange: () => {},
    value: '',
    placeholder: '',
}

LabelledInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
}

export default LabelledInput;