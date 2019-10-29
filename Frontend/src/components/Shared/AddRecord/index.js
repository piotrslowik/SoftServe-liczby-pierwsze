import React from 'react';
import PropTypes from 'prop-types';

import LabelledInput from '../Fields/LabelledInput';
import Button from '../Fields/Button';
import EditableTable from '../EditableTable';

const AddRecord = ({
    text,
    value,
    secondText,
    secondValue,
    tableValues,
    onClickAdd,
    onInput,
    onTableClick,
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
            { secondText
            ?   <LabelledInput label={firstCharToUpperCase(secondText)} value={secondValue} />
            :   null
            }
            { tableValues.length
            ?   <EditableTable
                    className="AddRecord__list"
                    records={tableValues}
                    onClick={onTableClick}
                    noControls={true}
                />
            : null
            }
            <Button modifier="blue" text={`Dodaj ${text}`} onClick={handleAdd}/>
        </div>
    )
}

AddRecord.defaultProps = {
    text: '',
    value: '',
    secondText: '',
    secondValue: '',
    tableValues: [],
    onClickAdd: () => {},
    onInput: () => {},
    onTableClick: () => {},
    className: '',
}

AddRecord.propTypes = {
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
    onTableClick: PropTypes.func,
    className: PropTypes.string,
}

export default AddRecord;