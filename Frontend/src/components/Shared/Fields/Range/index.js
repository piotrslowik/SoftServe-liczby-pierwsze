import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.label,
        }
    }
    
    render() {
    
        return (
            <div className="Range">
                <Label text={this.state.label} />
                <input className="Range__min" type="number" placeholder="od" min={this.props.min} max={this.state.to} onInput={this.onFromInput} value={this.state.from}></input>
                <input className="Range__max" type="number" placeholder="do" min={this.state.from} max={this.props.max} onChange={this.onToIput} value={this.state.to}></input>
            </div>
        )
    }

    onFromInput = e => {
        this.setState({
            from: e.target.value,
        })
    }

    onToIput = e => {
        this.setState({
            to: e.target.value,
        })
    }
}

Range.defaultProps = {
    label: '',
    min: 0,
    max: 999999,
}

Range.propTypes = {
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
}

export default Range;