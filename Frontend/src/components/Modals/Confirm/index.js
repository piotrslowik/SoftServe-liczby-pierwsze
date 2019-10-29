import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../index';
import Button from '../../Shared/Fields/Button';

const Confirm = ({
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    message,
    showax,
}) => {
    return (
        <React.Fragment>
        {showax
        ?   <Modal>
                <div className="Confirm">
                    <p className="Confirm__message">{message}</p>
                    <div className="Confirm__buttons">
                        <Button onClick={onConfirm} text={confirmText} />
                        <Button onClick={onCancel} text={cancelText} />
                    </div>
                </div>
            </Modal>
        :   null
        }
        </React.Fragment>
    )
}

Confirm.defaultProps = {
    onConfirm: () => true,
    onCancel: () => false,
    confirmText: 'OK',
    cancelText: 'Anuluj',
    message: 'Na pewno?',
}

Confirm.propTypes = {
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    message: PropTypes.string,
}

export default Confirm;
