import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    modifier,
    onClick,
    text,
}) => {

    return (
        <button className={"Button" + (modifier ? ` Button--${modifier}` : '')} onClick={onClick}>{text}</button>
    );
}

Button.defaultProps = {
    modifier: 'blue',
    onClick: () => {},
    text: '',
}

Button.propTypes = {
    modifier: PropTypes.oneOf(['blue', 'yellow', 'red']),
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default Button;
