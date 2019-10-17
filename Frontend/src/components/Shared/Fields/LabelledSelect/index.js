import React, { Component } from 'react';

import Label from "../Label";

class LabelledSelect extends Component {
  
    render() {
        return (
            <div className="LabelledSelect">
                <Label text={this.props.label} />
                <select>
                    {this.props.values.map(value => 
                        <option>{value}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default LabelledSelect;