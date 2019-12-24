import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
    value,
    onChange,
    className,
    rows,
    columns,
    placeholder,
    maxlength,
}) => {
    return (
        <textarea
            className={`Textarea ${className}`}
            onChange={onChange}
            value={value}
            rows={rows}
            cols={columns}
            placeholder={placeholder}
            maxLength={maxlength}
        />
    )
}

Textarea.defaultProps = {
    value: '',
    onChange: () => {},
}

Textarea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    rows: PropTypes.number,
    columns: PropTypes.number,
    placeholder: PropTypes.string,
    maxlength: PropTypes.number,
}

export default Textarea;
