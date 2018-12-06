import React, { Component } from 'react'
import '../../stylesheets/Modals/Modal.css'

class Modal extends Component {
  
    render() {
      return (
        <div className="Modal">
            <div className="Modal-background" onClick={this.props.onCloseModal} />
            <div className="Modal-content">
                {this.props.children}
            </div>
        </div>
      );
    }

  }
  
  export default Modal;