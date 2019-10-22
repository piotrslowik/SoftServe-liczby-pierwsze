import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

const LabelledInput = ({
    label,
    type,
    onChange,
    value,
    placeholder,
}) => {
  
    return (
        <div className="LabelledInput">
            <Label text={label} />
            <input type={type} onChange={onChange} value={value} placeholder={placeholder} />
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
}

export default LabelledInput;