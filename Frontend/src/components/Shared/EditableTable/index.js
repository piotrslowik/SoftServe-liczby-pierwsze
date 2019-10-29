import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EditableRecord from '../EditableRecord';

import { isStringInText } from '../../../logic/helpers';

const EditableTable = ({
    records,
    noControls,
    onClick,
    onEdit,
    onDelete,
    className,
}) => {

    const [filterInput, setFilterInput] = useState('');

    const handleFilterInput = event => {
        setFilterInput(event.target.value);
    }

    return (
        <div className={"EditableTable flex-column-center " + className}>
            <input className="EditableTable__filter" value={filterInput} onChange={handleFilterInput} placeholder="Szukaj..." />
            <div className="EditableTable__records flex-column-center">
                {records
                    .filter(record => isStringInText(filterInput, record.text))
                    .map(record => {
                        return (
                            <EditableRecord
                                record={record}
                                noControls={noControls}
                                onClick={onClick}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                key={record.id}
                            />)
                    })
                }
            </div>
        </div>
    )
}

EditableTable.defaultProps = {
    records: [],
    noControls: false,
    onClick: () => {},
    onEdit: () => {},
    onDelete: () => {},
    className: '',
}

EditableTable.propTypes = {
    records: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
    })),
    noControls: PropTypes.bool,
    onClick: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    className: PropTypes.string,
}

export default EditableTable;