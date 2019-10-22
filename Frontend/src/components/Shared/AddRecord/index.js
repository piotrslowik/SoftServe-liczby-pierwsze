import React from 'react';
import PropTypes from 'prop-types';

import LabelledInput from '../Fields/LabelledInput';
import Button from '../Fields/Button';

const AddRecord = ({
    text,
    value,
    onClickAdd,
    onInput,
    className,
}) => {

    const firstCharToUpperCase = text => {
        return text.charAt(0).toUpperCase() + text.slice(1, text.length);
    }

    const handleAdd = () => {
        onClickAdd(value);
    }

    return (
        <div className={"AddRecord flex-column-center " + className}>
            <LabelledInput label={firstCharToUpperCase(text)}  onChange={onInput} value={value} />
            <Button modifier="blue" text={`Dodaj ${text}`} onClick={handleAdd}/>
        </div>
    )
}

AddRecord.defaultProps = {
    text: '',
    value: '',
    onClickAdd: () => {},
    onInput: () => {},
    className: '',
}

AddRecord.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    onClickAdd: PropTypes.func,
    onInput: PropTypes.func,
    className: PropTypes.string,
}

export default AddRecord;