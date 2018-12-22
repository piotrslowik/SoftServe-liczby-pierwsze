import React, { Component } from 'react'
import '../../stylesheets/Modals/Modal_OfferCard.css'

import Modal from './Modal'
import OfferCard from '../OfferCard'
import Button from '../Fields/Button';

class Modal_OfferCard extends Component {
    render() {
        return (
            <Modal>
                <div className="new-car-offer-card">
                    <OfferCard car={this.props.car} />
                    <div className="confirm-buttons">
                        <Button className="button-red" onClick={this.props.onReturn} text="Wróć" />
                        <Button className="button-yellow" onClick={this.handleAddCar} text="Dodaj" />
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Modal_OfferCard