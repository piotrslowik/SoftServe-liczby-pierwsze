import React, { Component } from 'react'

class Modal extends Component {
  
    render() {
      return (
        <div className="Modal">
            <div className="Modal-background" onClick={this.props.onCloseModal} />
            <div className="Modal-content">
              <h1 className="Modal__header">{this.props.header}</h1>
              {this.props.children}
            </div>
        </div>
      );
    }

  }
  
  export default Modal;