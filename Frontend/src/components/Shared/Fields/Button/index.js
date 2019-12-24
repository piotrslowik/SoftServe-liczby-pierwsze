import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    modifier,
    onClick,
    text,
    className,
}) => {

    return (
        <button className={"Button" + (modifier ? ` Button--${modifier} ` : '') + className} 
            onClick={onClick}>
            {text}
        </button>
    );
}

Button.defaultProps = {
    modifier: 'blue',
    onClick: () => {},
    text: '',
    className: '',
}

Button.propTypes = {
    modifier: PropTypes.oneOf(['blue', 'yellow', 'red']),
    onClick: PropTypes.func,
    text: PropTypes.string,
    className: PropTypes.string,
}

export default Button;
