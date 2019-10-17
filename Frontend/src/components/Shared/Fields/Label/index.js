import React from 'react';
import PropTypes from 'prop-types';

const Label = ({text}) => {
    return (
        <label className="Label">{text}</label>
    )
}

Label.defaultProps = {
    text: '',
}

Label.propTypes = {
    text: PropTypes.string
}

export default Label;