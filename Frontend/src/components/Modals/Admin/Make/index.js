import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import LabelledInput from '../../../Shared/Fields/LabelledInput';
import LabelledSelect from '../../../Shared/Fields/LabelledSelect';
import Button from '../../../Shared/Fields/Button';

import { sortObjectsArrayByField, makeObjectLast } from '../../../../logic/helpers';

const ManageMake = () => {
    const [value, setValue] = useState('');
    const [origins, setOrigins] = useState([]);

    useEffect(() => {
        getOrigins();
    }, [])

    const getOrigins = async () =>{
        const query = `
            query {
                origins {
                    origin,
                    _id,
                }
            }
        `;
        try {
            const result = await Axios.post('http://localhost:8000/graphql', {
                query: query,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let origins = result.data.data.origins;
            origins = sortObjectsArrayByField(origins, 'origin');
            origins = makeObjectLast(origins, 'origin', 'Inne');
            setOrigins(origins);
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleInput = event => {
        setValue(event.target.value);
    }

    return (
        <div className="ManageMake flex-column-center">
            <LabelledInput label="Marka"  onChange={handleInput} value={value} />
            <LabelledSelect label="Pochodzenie" values={origins.map(origin => origin.origin)}/>
            <Button modifier="blue" text="Dodaj nową markę" onClick={() => {}}/>
        </div>
    )
}

export default ManageMake;