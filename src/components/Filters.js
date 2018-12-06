import React, { Component } from 'react';

import LabelledSelect from './Fields/LabelledSelect';

import '../stylesheets/Filters.css';

import data from '../data.json'

class Filters extends Component {
  
    render() {
        return (
            <div className="Filters">
                <LabelledSelect label="Paliwo" values={['Dowolny', ...data.fuelTypes]} />
                <LabelledSelect label="Pochodzenie" values={['Dowolne', ...data.origin.sort(), "Inne"]} />
            </div>
        )
    }
}

export default Filters;