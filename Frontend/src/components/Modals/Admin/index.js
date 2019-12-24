import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '..'
import Picker from '../../Shared/Picker';

import ManageOrigin from './Origin';
import ManageFuel from './Fuel';
import ManageMake from './Make';
import ManageModel from './Model';

const Modal_Admin = ({
    header,
    onCloseModal,
}) => {
    
    const optionsToRender = [
        'Marka',
        'Model',
        'Paliwo',
        'Pochodzenie',
    ];

    const [optionToRender, setOptionToRender] = useState(0);

    const renderOption = () => {
        switch (optionToRender) {
            case 0:
                return <ManageMake />
            case 1:
                return <ManageModel />  
            case 2:
                return <ManageFuel />
            case 3:
                return <ManageOrigin />
            default:
                return <h1>404</h1>
    }
  }

    return (
        <Modal onCloseModal={onCloseModal} header={header}>
            <div className="AdminModal">
                {renderOption()}
                <Picker options={optionsToRender} active={optionToRender} actionOnClick={setOptionToRender} />
            </div>
        </Modal>
    );
}
  
Modal_Admin.defaultProps = {
    header: '',
    onCloseModal: () => {},
}

Modal_Admin.propTypes = {
    header: PropTypes.string,
    onCloseModal: PropTypes.func,
}

export default Modal_Admin;
