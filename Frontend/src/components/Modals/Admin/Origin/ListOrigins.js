import React from 'react';
import PropTypes from 'prop-types';

import EditableTable from '../../../Shared/EditableTable';

const ListOrigins = ({
    onEdit,
    onDelete,
    origins,
}) => {    

    return (
        <div className="ListOrigins flex-column-center">
            <EditableTable
                records={origins.map(origin => {return {text: origin.origin, id: origin._id}})}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </div>
    )
}

ListOrigins.defaultProps = {
    origins: [],
    onEdit: () => {},
    onDelete: () => {},
}

ListOrigins.propTypes = {
    origins: PropTypes.arrayOf(PropTypes.shape({
        origin: PropTypes.string,
        _id: PropTypes.string,
    })),
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
}

export default ListOrigins;
