import React, { Component } from 'react';

class Button extends Component {

    render() {
        return (
            <button className={`Button ${this.props.className}`} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}

export default Button;