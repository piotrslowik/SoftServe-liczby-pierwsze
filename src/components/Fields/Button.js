import React, { Component } from 'react';

import '../../stylesheets/Fields/Button.css';

class Button extends Component {

    render() {
        return (
            <button className={`Button ${this.props.className}`} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}

export default Button;