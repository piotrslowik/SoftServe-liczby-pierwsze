import React from 'react';
import PropTypes from 'prop-types';

import EditRecord from '../../../Shared/EditRecord';

const EditOrigin = ({
    value,
    onReturn,
    onInput,
    onClick,
}) => {

    const handleInput = event => {
        onInput(event.target.value);
    }

    return (
        <div className="EditOrigin flex-column-center">
            <EditRecord
                text="pochodzenie"
                value={value}
                onInput={handleInput}
                onClickEdit={onClick}
                onReturn={onReturn}
            />
        </div>
    )
}

EditOrigin.defaultProps = {
    origin: {},
    onReturn: () => {},
}

EditOrigin.propTypes = {
    origin: PropTypes.shape({
        text: PropTypes.text,
        id: PropTypes.string,
    }),
    onReturn: PropTypes.func,
}

export default EditOrigin;
