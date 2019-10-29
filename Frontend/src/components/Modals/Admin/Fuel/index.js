import React, { useState, useEffect } from 'react';

import { getFuels, deleteFuel, addFuel, editFuel } from '../../../../logic/graphql/fuel';

import AddRecord from '../../../Shared/AddRecord';
import EditRecord from '../../../Shared/EditRecord';
import EditableTable from '../../../Shared/EditableTable';

const ManageFuel = () => {

    const [fuels, setFuels] = useState([]);
    const [addMode, switchMode] = useState(true);
    const [fuelToEdit, setFuelToEdit] = useState({});
    const [addValue, setAddValue] = useState('');
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        fetchFuels();
    }, [])

    const fetchFuels = async () => {
        const fuels = await getFuels()
        setFuels(fuels);
    };

    const handleAddInput = event => {
        setAddValue(event.target.value);
    }

    const handleAddFuel = async fuelName => {
        await addFuel(fuelName);
        setAddValue('');
        fetchFuels();
    }

    const handleReturn = () => {
        switchMode(true);
    }

    const handleEditInput = event => {
        setEditValue(event.target.value);
    }

    const handleEdit = fuel => {
        setFuelToEdit(fuel);
        setEditValue(fuel.text);
        switchMode(false);
    }

    const handleEditFuel = async () => {
        await editFuel(editValue, fuelToEdit.id);
        fetchFuels();
        handleReturn();
    }

    const handleDelete = async fuel => {
        const check = window.confirm(`Czy na pewno chcesz usunąć rodzaj paliwa: ${fuel.text} ?`);
        if (check) {
            await deleteFuel(fuel.id);
            fetchFuels();
        }
    }

    return (
        <div className="ManageFuel">
            {addMode
                ? <AddRecord
                    className="AddFuel"
                    text="rodzaj paliwa"
                    value={addValue}
                    onInput={handleAddInput}
                    onClickAdd={handleAddFuel}
                />
                : <EditRecord
                    className="EditFuel"
                    text="rodzaj paliwa"
                    value={editValue}
                    onInput={handleEditInput}
                    onClickEdit={handleEditFuel}
                    onReturn={handleReturn}
                />
            }
            <EditableTable
                className="ListFuels"
                records={fuels.map(fuel => {return {text: fuel.fuel, id: fuel._id}})}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default ManageFuel;
