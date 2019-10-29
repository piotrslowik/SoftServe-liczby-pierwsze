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
        'Ogłoszenie',
        'Marka',
        'Model',
        'Paliwo',
        'Pochodzenie',
    ];

    const [optionToRender, setOptionToRender] = useState(0);

    const renderOption = () => {
        switch (optionToRender) {
            case 0:
                return (
                    <p>Dodawanie nowego ogłoszenia</p>
                    )
            case 1:
                return <ManageMake />
            case 2:
                return <ManageModel />  
            case 3:
                return <ManageFuel />
            case 4:
                return <ManageOrigin />
            default:
                return (
                    <p>Standard dupa statement</p>
                )
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
