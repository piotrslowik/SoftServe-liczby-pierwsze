import React, { Component } from 'react'
import '../../stylesheets/Modals/Modal_Login.css'

import Modal from './Modal'

class Modal_Login extends Component {
    render() {
        return (
          <Modal onCloseModal={this.props.onCloseModal} header={this.props.header}>
            <div className="login-form">
                <p>LALALA</p>
            </div>
          </Modal>
    );
  }

}
  
export default Modal_Login;