import React from 'react';
import PropTypes from 'prop-types';

import AddRecord from '../../../Shared/AddRecord';

const AddOrigin = ({
    value,
    onInput,
    onAddClick,
}) => {
    

    const handleInput = event => {
        onInput(event.target.value);
    }

    return (
        <div className="AddOrigin flex-column-center">
            <AddRecord
                text="pochodzenie"
                value={value}
                onInput={handleInput}
                onClickAdd={onAddClick}
            />
        </div>
    )
}

AddOrigin.defaultProps = {
    value: '',
    onInput: () => {},
    onAddClick: () => {},
}
AddOrigin.propTypes = {
    value: PropTypes.string,
    onInput: PropTypes.func,
    onAddClick: PropTypes.func,
}
export default AddOrigin;
