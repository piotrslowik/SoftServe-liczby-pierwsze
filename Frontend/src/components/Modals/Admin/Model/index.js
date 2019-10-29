import React, { useState, useEffect } from 'react';

import AddRecord from '../../../Shared/AddRecord';
import EditRecord from '../../../Shared/EditRecord';
import EditableTable from '../../../Shared/EditableTable';

import { isObjectEmpty } from '../../../../logic/helpers';
import { getMakes } from '../../../../logic/graphql/make';
import { getModels, addModel, editModel, deleteModel } from '../../../../logic/graphql/model';

const ManageModel = () => {

    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [addMode, switchMode] = useState(true);
    const [addValue, setAddValue] = useState('');
    const [makeOfModel, setMakeOfModel] = useState({});
    const [editValue, setEditValue] = useState('');
    const [modelToEdit, setModelToEdit] = useState({});
    const [makeToListModels, setMakeToListModels] = useState({});
    const [makeOfModelToEdit, setMakeOfModelToEdit] = useState({});

    useEffect(() => {
        fetchMakes();
    }, []);

    useEffect(() => {
        fetchModels(makeToListModels);
    }, [makeToListModels]);

    const fetchModels = async make => {
        if (isObjectEmpty(make)) {
            const models = await getModels(make.id);
            setModels(models.map(model => {return {
                text: model.model,
                id: model._id,
                makeId: model.make._id,
            }}));
        }
    };

    const fetchMakes = async () => {
        const makes = await getMakes();
        setMakes(makes.map(make => {return {
            text: make.make,
            id: make._id,
        }}));
    };

    const handleAddInput = event => {
        setAddValue(event.target.value);
    }

    const handleAddModel = async modelName => {
        await addModel(modelName, makeOfModel.id);
        setAddValue('');
        fetchModels(makeOfModel);
    }

    const handleReturn = () => {
        switchMode(true);
    }

    const handleEditInput = event => {
        setEditValue(event.target.value);
    }

    const handleEdit = model => {
        setMakeOfModelToEdit(findMake(model.makeId))
        setModelToEdit(model);
        setEditValue(model.text);
        switchMode(false);
    }

    const handleEditModel = async () => {
        await editModel({
            model: editValue,
            modelId: modelToEdit.id,
            makeId: makeOfModelToEdit.id, 
        });
        fetchModels(makeOfModelToEdit);
        handleReturn();
    }

    const handleDelete = async model => {
        const check = window.confirm(`Czy na pewno chcesz usunąć model: ${model.text} ?`);
        if (check) {
            await deleteModel(model.id);
            fetchModels(makeToListModels);
        }
    }

    const handleMakeChoice = async make => {
        setMakeToListModels(make);
    }

    const handleMakeChange = make => {
        setMakeOfModel(make);
        fetchModels(make);
    }

    const handleEditMakeOfModelChange = make => {
        setMakeOfModelToEdit(make);
    }

    const findMake = makeId => {
        return makes.find(make => {
            return make.id === makeId
        });
    }

    return (
        <div className="ManageModel">
          {addMode
                ? <AddRecord
                    className="AddModel"
                    text="model"
                    value={addValue}
                    secondText="marka"
                    secondValue={makeOfModel.text}
                    tableValues={makes}
                    onTableClick={handleMakeChange}
                    onInput={handleAddInput}
                    onClickAdd={handleAddModel}
                />
                : <EditRecord
                    className="EditModel"
                    text="model"
                    value={editValue}
                    secondText="marka"
                    secondValue={makeOfModelToEdit.text}
                    tableValues={makes}
                    onTableClick={handleEditMakeOfModelChange}
                    onInput={handleEditInput}
                    onClickEdit={handleEditModel}
                    onReturn={handleReturn}
                />
            }
            <EditableTable
                className="ListMakes"
                records={makes}
                noControls={true}
                onClick={handleMakeChoice}
            />
            <EditableTable
                className="ListModels"
                records={models}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default ManageModel;