import React, { Component } from 'react'

import Modal from '..'
import OfferCard from '../../Shared/OfferCard'
import Button from '../../Shared/Fields/Button';

class Modal_OfferCard extends Component {
    render() {
        return (
            <Modal>
                <div className="new-car-offer-card">
                    <OfferCard car={this.props.car} />
                    <div className="confirm-buttons">
                        <Button modifier="red" onClick={this.props.onReturn} text="Wróć" />
                        <Button modifier="yellow" onClick={this.handleAddCar} text="Dodaj" />
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Modal_OfferCard