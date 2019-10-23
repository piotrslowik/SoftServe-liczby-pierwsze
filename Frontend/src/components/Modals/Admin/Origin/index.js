import React, { useState, useEffect } from 'react';

import { getOrigins, deleteOrigin, addOrigin, editOrigin } from '../../../../logic/graphql/origin';

import AddRecord from '../../../Shared/AddRecord';
import EditRecord from '../../../Shared/EditRecord';
import EditableTable from '../../../Shared/EditableTable';

const ManageOrigin = () => {

    const [origins, setOrigins] = useState([]);
    const [addMode, switchMode] = useState(true);
    const [originToEdit, setOriginToEdit] = useState(null);
    const [addValue, setAddValue] = useState('');
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        fetchOrigins();
    }, [])

    const fetchOrigins = async () => {
        const origins = await getOrigins()
        setOrigins(origins);
    };

    const handleAddInput = event => {
        setAddValue(event.target.value);
    }

    const handleAddOrigin = async originName => {
        await addOrigin(originName);
        setAddValue('');
        fetchOrigins();
    }

    const handleReturn = () => {
        switchMode(true);
    }

    const handleEditInput = event => {
        setEditValue(event.target.value);
    }

    const handleEdit = origin => {
        setOriginToEdit(origin);
        setEditValue(origin.text);
        switchMode(false);
    }

    const handleEditOrigin = async () => {
        await editOrigin(editValue, originToEdit.id);
        fetchOrigins();
        handleReturn();
    }

    const handleDelete = async origin => {
        const result = await deleteOrigin(origin.id);
        alert('Pomyślnie usunięto pochodzenie - ' + result);
        fetchOrigins();
    }

    return (
        <div className="ManageOrigin">
            {addMode
                ? <AddRecord
                    className="AddOrigin"
                    text="pochodzenie"
                    value={addValue}
                    onInput={handleAddInput}
                    onClickAdd={handleAddOrigin}
                />
                : <EditRecord
                    className="EditOrigin"
                    text="pochodzenie"
                    value={editValue}
                    onInput={handleEditInput}
                    onClickEdit={handleEditOrigin}
                    onReturn={handleReturn}
                />
            }
            <EditableTable
                className="ListOrigins"
                records={origins.map(origin => {return {text: origin.origin, id: origin._id}})}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default ManageOrigin;
