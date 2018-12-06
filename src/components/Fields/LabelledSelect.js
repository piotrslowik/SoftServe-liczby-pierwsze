import React, { Component } from 'react';

import '../../stylesheets/Fields/LabelledSelect.css';

class LabelledSelect extends Component {
  
    render() {
        return (
            <div className="LabelledSelect">
                <label>{this.props.label}</label>
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