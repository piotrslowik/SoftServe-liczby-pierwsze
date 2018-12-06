import React, { Component } from 'react'
import '../../stylesheets/Modals/Modal_OfferCard.css'

import Modal from './Modal'
import OfferCard from '../OfferCard'

class Modal_OfferCard extends Component {
    render() {
        return (
            <Modal>
                <div className="new-car-offer-card">
                    <OfferCard car={this.props.car} />
                    <div className="confirm-buttons">
                        <button className="button__return" onClick={this.props.onReturn}>Wróć</button>
                        <button className="button__confirm" onClick={this.handleAddCar}>Dodaj</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Modal_OfferCard