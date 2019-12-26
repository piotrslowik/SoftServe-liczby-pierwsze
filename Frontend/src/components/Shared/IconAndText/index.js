import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons'

const IconAndText = ({
    icon,
    text,
}) => {

    return (
    <p>
        <FontAwesomeIcon icon={icon} className="IconAndText" />
        { text }
    </p>
    )
}

IconAndText.propTypes = {
    icon: PropTypes.instanceOf(typeof faForward).isRequired,
    text: PropTypes.string.isRequired,
}

export default IconAndText;
