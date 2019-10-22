import React from 'react';
import PropTypes from 'prop-types';

import LabelledInput from '../Fields/LabelledInput';
import Button from '../Fields/Button';

const EditRecord = ({
    text,
    value,
    onClickEdit,
    onInput,
    onReturn,
    className,
}) => {

    const firstCharToUpperCase = text => {
        return text.charAt(0).toUpperCase() + text.slice(1, text.length);
    }

    return (
        <div className={"EditRecord flex-column-center " + className}>
            <LabelledInput label={firstCharToUpperCase(text)}  onChange={onInput} value={value} />
            <div className="EditRecord__buttons">
                <Button modifier="blue" text={`Edytuj ${text}`} onClick={onClickEdit}/>
                <Button modifier="blue" text="Powrót" onClick={onReturn}/>
            </div>
        </div>
    )
}

EditRecord.defaultProps = {
    text: '',
    value: '',
    onClickAdd: () => {},
    onInput: () => {},
    onReturn: () => {},
    className: '',
}

EditRecord.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    onClickAdd: PropTypes.func,
    onInput: PropTypes.func,
    onReturn: PropTypes.func,
    className: PropTypes.string,
}

export default EditRecord;