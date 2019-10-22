import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  header,
  onCloseModal,
  children,
}) => {

  useEffect(() => window.addEventListener('keyup', closeModalWithEscKey));

  useEffect(() => {
    return () => window.removeEventListener('keyup', closeModalWithEscKey);
  });

  const closeModal = () => {
    const modalRoot = document.querySelector('.Modal');
    modalRoot.classList.add('closing-modal');
    setTimeout(onCloseModal, 400);
  }

  const closeModalWithEscKey = event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      window.removeEventListener('keyup', closeModalWithEscKey);
    }
  }
  
  return (
    <div className="Modal" onKeyDown={closeModalWithEscKey} >
        <div className="Modal-background" onClick={closeModal} />
        <div className="Modal-content">
          <h1 className="Modal__header">{header}</h1>
          {children}
        </div>
    </div>
  );

}
  
Modal.defaultProps = {
  header: '',
  onCloseModal: () => {},
  children: <div></div>,
}

Modal.propTypes = {
  header: PropTypes.string,
  onCloseModal: PropTypes.func,
  children: PropTypes.node,
}

  export default Modal;
