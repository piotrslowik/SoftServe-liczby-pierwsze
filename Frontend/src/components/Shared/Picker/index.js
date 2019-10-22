import React from 'react';
import PropTypes from 'prop-types';

const Picker = ({
    options,
    active,
    actionOnClick,
}) => {
    return (
        <div className="Picker">
            {
            options.map((option, index) => {
                return (
                    <p
                    key={index}
                    className={"Picker__element" + (index === active ? " Picker__element--active" : "")}
                    onClick={() => actionOnClick(index)}>
                        {option}
                    </p>
                )
            })
            }
        </div>
    )
}

Picker.defaultProps = {
    options: [],
    active: 0,
    actionOnClick: () => {},
}

Picker.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.number,
    actionOnClick: PropTypes.func,
}

export default Picker;
