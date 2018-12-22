import React, { Component } from 'react'
import '../stylesheets/OfferCard.css'

const images = require.context('./../static/images')


class OfferCard extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.car
  }

  formatNumber = (number) => {
    let spaceIterator = 0;
    let string = number.toString();
    let output = "";
    for (let i = string.length - 1; i >= 0; i--) {
        output = string.charAt(i) + output;
        spaceIterator++;
        if (spaceIterator % 3 === 0 && i !== 0) {
            output = " " + output;
        }
    }
    return output;
}



  render() {
    let imgSrc = images(`./${this.state.imgFileName}`)

    return (
      <div className="OfferCard">
        <div className="image">
          <img ref="image" src={imgSrc} alt="main" className="image__pic" />
          <div className="image__overlay">
            <div className="image__text">
              Skórzana tapicerka, bixenon, automatyczna klimatyzacja, nawigacja, skrzynia automatyczna 7-biegowa, czujniki parkowania przód i tył, kamera cofania, tempomat
            </div>
          </div>
        </div>
        <div className="details">
          <div className="details__header">
            <p className="details__make">{this.state.make}</p>
            <p className="details__model">{this.state.model}</p>
            <p className="details__price">{this.formatNumber(this.state.price)}<span className="details__price--pln"> PLN</span></p>
          </div>
          <div className="details__engine">
            <p>{this.state.fuel}</p>
            <p>{this.state.vol} cm³</p>
            <p>{this.state.horsepower} KM</p>
          </div>
          <div className="details__bottom">
          <p>{this.state.year}</p>
            <p>{this.formatNumber(this.state.mileage)} km</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferCard;