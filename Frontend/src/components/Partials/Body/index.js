import React, { Component } from 'react'
import cars from '../../../cars.json'

import OfferCard from '../../Shared/OfferCard'

import { isStringInText } from '../../../logic/helpers';

class Body extends Component {

  state = {
    cars: cars
  }

  isFilterInputIn (field) {
    return field.toLowerCase().indexOf(this.props.filterInput.toLowerCase()) !== -1
  }

  render() {
    return (
      <div className="Body">
        { this.state.cars
            .filter(car => 
              isStringInText(this.props.filterInput, car.make) || 
              isStringInText(this.props.filterInput, car.model) )
            .map( car => 
              <OfferCard car={car} key={car.id} /> )
        }
      </div>
    );
  }
}

export default Body;




















  /*cars = [{
    make: 'mercedes-benz',
    model: 'Klasa C (W204)',
    fuel: 'Benzyna',
    vol: 6208,
    horsepower: 457,
    mileage: 12800,
    year: 2009,
    imgSrc: require('../static/images/1.jpg')
  },
  {
    make: 'jaguar',
    model: 'XF II',
    fuel: 'Benzyna',
    vol: 2995,
    horsepower: 380,
    mileage: 54000,
    year: 2015,
    imgSrc: require('../static/images/2.jpg')
  },
  {
    make: 'Maserati',
    model: 'Quattroporte V',
    fuel: 'Benzyna + LPG',
    vol: 4691,
    horsepower: 440,
    mileage: 335000,
    year: 2005,
    imgSrc: require('../static/images/3.jpg')
  },
  {
    make: 'bmw',
    model: 'z8',
    fuel: 'Benzyna',
    vol: 4941,
    horsepower: 400,
    mileage: 124000,
    year: 2001,
    imgSrc: require('../static/images/4.png')
  }, 
  {
    make: 'bmw',
    model: '5 (e60)',
    fuel: 'Diesel',
    vol: 2993,
    horsepower: 286,
    mileage: 487000,
    year: 2006,
    imgSrc: require('../static/images/5.jpg')
  }]*/  