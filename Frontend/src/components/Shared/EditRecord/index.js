import React from 'react';
import PropTypes from 'prop-types';

import LabelledInput from '../Fields/LabelledInput';
import Button from '../Fields/Button';
import EditableTable from '../EditableTable';

const EditRecord = ({
    text,
    value,
    secondText,
    secondValue,
    tableValues,
    onClickEdit,
    onInput,
    onReturn,
    onTableClick,
    className,
}) => {

    const firstCharToUpperCase = text => {
        return text.charAt(0).toUpperCase() + text.slice(1, text.length);
    }

    return (
        <div className={"EditRecord flex-column-center " + className}>
            <div className="EditRecord__inputs">
                <LabelledInput label={firstCharToUpperCase(text)}  onChange={onInput} value={value} />
                { secondText
                ?   <LabelledInput label={firstCharToUpperCase(secondText)} value={secondValue} />
                :   null
                }
                 <div className="EditRecord__buttons EditRecord__buttons--mobile">
                    <Button modifier="blue" text="Edytuj" onClick={onClickEdit}/>
                    <Button modifier="blue" text="Powrót" onClick={onReturn}/>
                </div>
            </div>
            { tableValues.length
            ?   <EditableTable 
                    className="EditRecord__list"
                    records={tableValues}
                    onClick={onTableClick}
                    noControls={true}
                />
            : null
            }
            <div className="EditRecord__buttons EditRecord__buttons--desktop">
                <Button modifier="blue" text="Edytuj" onClick={onClickEdit}/>
                <Button modifier="blue" text="Powrót" onClick={onReturn}/>
            </div>
        </div>
    )
}

EditRecord.defaultProps = {
    text: '',
    value: '',
    secondText: '',
    secondValue: '',
    tableValues: [],
    onClickAdd: () => {},
    onInput: () => {},
    onReturn: () => {},
    onTableClick: () => {},
    className: '',
}

EditRecord.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    secondText: PropTypes.string,
    secondValue: PropTypes.string,
    tableValues: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
    })),
    onClickAdd: PropTypes.func,
    onInput: PropTypes.func,
    onReturn: PropTypes.func,
    onTableClick: PropTypes.func,
    className: PropTypes.string,
}

export default EditRecord;