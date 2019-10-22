import React, { useState } from 'react';

import LabelledInput from '../../../Shared/Fields/LabelledInput';
import Button from '../../../Shared/Fields/Button';

const ManageFuel = () => {
    const [value, setValue] = useState('');

    const handleInput = event => {
        setValue(event.target.value);
    }

    return (
        <div className="ManageFuel flex-column-center">
            <LabelledInput label="Rodzaj paliwa"  onChange={handleInput} value={value} />
            <Button modifier="blue" text="Dodaj rodzaj paliwa" onClick={() => {}}/>
        </div>
    )
}

export default ManageFuel;