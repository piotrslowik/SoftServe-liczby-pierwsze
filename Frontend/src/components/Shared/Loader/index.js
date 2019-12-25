import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({text}) => {
    return (
        <div className="Loader">
            <div className="Loader__spinner">
                <div />
                <div />
                <div />
                <div />
            </div>
            {text
            ?   <p className="Loader__text">{text}</p>
            :   null
            }
        </div>
    )
}

Loader.propTypes = {
    text: PropTypes.string,
}

export default Loader;
