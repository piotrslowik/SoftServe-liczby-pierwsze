import React, { Component } from 'react';

import LabelledSelect from '../../Shared/Fields/LabelledSelect';
import Range from '../../Shared/Fields/Range';

import data from '../../../data.json'

class Filters extends Component {
  
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <div className="Filters">
                <LabelledSelect label="Paliwo" values={['Dowolne', ...data.fuelTypes]} />
                <LabelledSelect label="Pochodzenie" values={['Dowolne', ...data.origin.sort(), "Inne"]} />
                <Range label="Przebieg"></Range>
                {/* <Range label="Cena"></Range> */}
                <Range label="Rocznik" min={currentYear - 100} max={currentYear}></Range>
            </div>
        )
    }
}

export default Filters;