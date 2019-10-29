import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

const EditableRecord = ({
    record,
    noControls,
    onClick,
    onEdit,
    onDelete,
}) => {

    const handleEdit = () => {
        onEdit(record);
    }

    const handleDelete = () => {
        onDelete(record);
    }

    const handleClick = () => {
        onClick(record);
    }

    return (
        <div className={'EditableRecord ' + (noControls ? 'EditableRecord--clickable':'')} onClick={handleClick}>
            <p className="EditableRecord__text">{record.text}</p>
            {!noControls
                ? <div className="EditableRecord__controls">
                    <FontAwesomeIcon icon={faPen} onClick={handleEdit} className="EditableRecord__edit" />
                    <FontAwesomeIcon icon={faTimes} onClick={handleDelete} className="EditableRecord__delete" />
                </div>
                : null
            }
        </div>
    )
}

EditableRecord.defaultProps = {
    record: {},
    noControls: false,
    onClick: () => {},
    onDelete: () => {},
    onEdit: () => {},
}

EditableRecord.propTypes = {
    record: PropTypes.shape({
        text: PropTypes.string,
        key: PropTypes.string,
    }),
    noControls: PropTypes.bool,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}

export default EditableRecord;
