import React, { useState, useEffect } from 'react';

import AddRecord from '../../../Shared/AddRecord';
import EditRecord from '../../../Shared/EditRecord';
import EditableTable from '../../../Shared/EditableTable';

import { getOrigins } from '../../../../logic/graphql/origin';
import { addMake, getMakes, deleteMake, editMake } from '../../../../logic/graphql/make';

const ManageMake = () => {

    const [origins, setOrigins] = useState([]);
    const [makes, setMakes] = useState([]);
    const [addMode, switchMode] = useState(true);
    const [addValue, setAddValue] = useState('');
    const [originOfMake, setOriginOfMake] = useState({});
    const [editValue, setEditValue] = useState('');
    const [makeToEdit, setMakeToEdit] = useState({});
    const [originOfMakeToEdit, setOriginOfMakeToEdit] = useState({});

    useEffect(() => {
        fetchOrigins();
        fetchMakes();
    }, [])

    const fetchOrigins = async () => {
        const origins = await getOrigins();
        setOrigins(origins.map(origin => {return {
            text: origin.origin,
            id: origin._id,
        }}));
    };

    const fetchMakes = async () => {
        const makes = await getMakes();
        setMakes(makes.map(make => {return {
            text: make.make,
            id: make._id,
            originId: make.origin._id
        }}));
    };

    const handleAddInput = event => {
        setAddValue(event.target.value);
    }

    const handleAddMake = async makeName => {
        await addMake(makeName, originOfMake.id);
        setAddValue('');
        fetchMakes();
    }

    const handleReturn = () => {
        switchMode(true);
    }

    const handleEditInput = event => {
        setEditValue(event.target.value);
    }

    const handleEdit = make => {
        setOriginOfMakeToEdit(findOrigin(make.originId))
        setMakeToEdit(make);
        setEditValue(make.text);
        switchMode(false);
    }

    const handleEditMake = async () => {
        await editMake({
            make: editValue,
            originId: originOfMakeToEdit.id,
            makeId: makeToEdit.id
        });
        fetchMakes();
        handleReturn();
    }

    const handleDelete = async make => {
        const result = await deleteMake(make.id);
        alert('Pomyślnie usunięto markę - ' + result);
        fetchMakes();
    }

    const handleOriginChange = origin => {
        setOriginOfMake(origin);
    }

    const handleEditMakeOriginChange = origin => {
        setOriginOfMakeToEdit(origin);
    }

    const findOrigin = originId => {
        return origins.find(origin => {
            return origin.id === originId
        });
    }

    return (
        <div className="ManageMake">
          {addMode
                ? <AddRecord
                    className="AddMake"
                    text="marka"
                    value={addValue}
                    secondText="pochodzenie"
                    secondValue={originOfMake.text}
                    tableValues={origins}
                    onTableClick={handleOriginChange}
                    onInput={handleAddInput}
                    onClickAdd={handleAddMake}
                />
                : <EditRecord
                    className="EditMake"
                    text="marka"
                    value={editValue}
                    secondText="pochodzenie"
                    secondValue={originOfMakeToEdit.text}
                    tableValues={origins}
                    onTableClick={handleEditMakeOriginChange}
                    onInput={handleEditInput}
                    onClickEdit={handleEditMake}
                    onReturn={handleReturn}
                />
            }
            <EditableTable
                className="ListMakes"
                records={makes}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default ManageMake;