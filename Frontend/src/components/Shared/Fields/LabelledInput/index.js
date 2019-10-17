import React, { Component } from 'react';

import Label from '../Label';

class LabelledInput extends Component {
  
    render() {
        return (
            <div className="LabelledInput">
                <Label text={this.props.label} />
                <input type={this.props.type} onChange={this.props.onChange} value={this.props.value} />
            </div>
        )
    }
}

export default LabelledInput;