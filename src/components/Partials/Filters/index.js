import React, { Component } from 'react';

import LabelledSelect from '../../Shared/Fields/LabelledSelect';
import Range from '../../Shared/Fields/Range';

import data from '../../../data.json'

class Filters extends Component {
  
    render() {
        return (
            <div className="Filters">
                <LabelledSelect label="Paliwo" values={['Dowolne', ...data.fuelTypes]} />
                <LabelledSelect label="Pochodzenie" values={['Dowolne', ...data.origin.sort(), "Inne"]} />
                <Range label="Przebieg"></Range>
            </div>
        )
    }
}

export default Filters;