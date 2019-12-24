import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import { formatNumber } from '../../../logic/helpers';

// const images = require.context('./../../../static/images')


class OfferCard extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.offer
  }


  render() {

    return (
      <Link to={`/offer/${this.state._id}`} className="OfferCard-Link">
        <div className="OfferCard">
          <div className="image">
            <img src={this.state.photos[0]} alt="main" className="image__pic" />
            <div className="image__overlay">
              <div className="image__text">
                {this.state.shortDescription}
              </div>
            </div>
          </div>
          <div className="details">
            <div className="details__header">
              <p className="details__make">{this.state.make.make}</p>
              <p className="details__model">{this.state.model.model}</p>
              <p className="details__price">{formatNumber(this.state.price)}<span className="details__price--pln"> PLN</span></p>
            </div>
            <div className="details__engine">
              <p>{this.state.fuel.fuel}</p>
              <p>{this.state.volume} cm³</p>
              <p>{this.state.power} KM</p>
            </div>
            <div className="details__bottom">
            <p>{this.state.year}</p>
              <p>{formatNumber(this.state.kms)} km</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default OfferCard;