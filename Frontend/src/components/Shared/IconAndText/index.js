import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    icon: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
}

export default IconAndText;
