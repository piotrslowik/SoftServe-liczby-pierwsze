import React, { Component } from 'react'
import '../../stylesheets/Modals/Modal_AddCar.css'

import Modal from './Modal'
import ModalOfferCard from './Modal_OfferCard'

class Modal_AddCar extends Component {

  state = {
    make: '',
    model: '',
    fuel: '',
    vol: 0,
    horsepower: 0,
    mileage: 0,
    year: 0,
    imgFileName: '',
    isOfferCardModalVisible: false
  }

  handleFileInput = e => {
    let file = e.target.files.item(0).name
    this.setState(
      {
        imgFileName: file
      }
    )
  }

  handleClearForm = () => {
    if (window.confirm('Czy na pewno chcesz wyczyścić cały formularz?')) {
      const form = document.querySelector('.add-car-form')
      form.childNodes.forEach(node => {
        if (node.type) node.value = ''
      })
    }
  }

  handleAddCar = () => {
    if (this.isFormReady()) {
      this.setState(
        {
          make: document.querySelector('.input__make').value,
          model: document.querySelector('.input__model').value,
          fuel: document.querySelector('.input__fuel').value,
          vol: document.querySelector('.input__vol').value,
          horsepower: document.querySelector('.input__horsepower').value,
          mileage: document.querySelector('.input__mileage').value,
          year: document.querySelector('.input__year').value,
          isOfferCardModalVisible: true
        }
      )
    } else {
      alert('Wypełnij do końca')
    }
  }

  isFormReady = () => {
    const form = document.querySelector('.add-car-form')
    let isFormReady = true
    form.childNodes.forEach(node => {
      if (isFormReady && node.type && !node.value) {
        isFormReady = false
      }
    })
    return isFormReady
  }

  hideOfferCardModal = () => {
    this.setState(
      {
        isOfferCardModalVisible: false
      }
    )
  }
  
  render() {
    return (
      <Modal onCloseModal={this.props.onCloseModal}>
        <h1 className="form__header">Nowe ogłoszenie</h1>
        <div className="add-car-form">
          <label htmlFor="make">Marka</label>
          <input type="text" className="input__make" name="make" required></input>

          <label>Pojemność</label>
          <input type="number" className="input__vol" required></input>
          <label className="unit">cm³</label>

          <label>Model</label>
          <input type="text" className="input__model" required></input>

          <label>Moc</label>
          <input type="number" className="input__horsepower" required></input>
          <label className="unit">KM</label>

          <label>Paliwo</label>
          <select className="input__fuel" required>
            <option value={null}></option>
            <option value="Benzyna">Benzyna</option>
            <option value="Benzyna + LPG">Benzyna + LPG</option>
            <option value="Diesel">Diesel</option>
            <option value="Elektryczny">Elektryczny</option>
          </select>

          <label>Przebieg</label>
          <input type="number" className="input__mileage" required></input>
          <label className="unit">km</label>

          <label className="label__description">Opis</label>
          <textarea className="input__description" maxlength="350" required></textarea>

          <label>Rocznik</label>
          <input type="number" className="input__year" min="1940" max={new Date().getFullYear()} required></input>
          <label className="unit">rok</label>

          <label>Zdjęcie</label>
          <input type="file" accept="image/*" className="input__image" onInput={this.handleFileInput} required></input>
        </div>

        <div className="add-car-buttons">
          <button className="button__clear" onClick={this.handleClearForm}>Wyczyść</button>
          <button className="button__add" onClick={this.handleAddCar}>Dodaj</button>
        </div>

        {this.state.isOfferCardModalVisible ?
        <ModalOfferCard onReturn={this.hideOfferCardModal} car={this.state} /> : null}
      </Modal>
    );
  }

}
  
export default Modal_AddCar;