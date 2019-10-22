import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

const EditableRecord = ({
    record,
    onEdit,
    onDelete,
}) => {

    const handleEdit = () => {
        onEdit(record);
    }

    const handleDelete = () => {
        onDelete(record);
    }

    return (
        <div className="EditableRecord">
            <p className="EditableRecord__text">{record.text}</p>
            <div className="EditableRecord__controls">
                <FontAwesomeIcon icon={faPen} onClick={handleEdit} className="EditableRecord__edit" />
                <FontAwesomeIcon icon={faTimes} onClick={handleDelete} className="EditableRecord__delete" />
            </div>
        </div>
    )
}

EditableRecord.defaultProps = {
    record: {},
    onDelete: () => {},
    onEdit: () => {},
}

EditableRecord.propTypes = {
    record: PropTypes.shape({
        text: PropTypes.string,
        key: PropTypes.string,
    }),
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}

export default EditableRecord;
