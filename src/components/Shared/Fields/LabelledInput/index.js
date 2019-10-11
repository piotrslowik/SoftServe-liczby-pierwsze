import React, { Component } from 'react';

class LabelledInput extends Component {
  
    render() {
        return (
            <div className="LabelledInput">
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={this.props.onChange} value={this.props.value} />
            </div>
        )
    }
}

export default LabelledInput;