import React, { Component } from 'react';

import Filters from './Filters'
import ModalAddCar from './Modals/Modal_AddCar'
import ModalRegister from './Modals/Modal_Register'
import ModalLogin from './Modals/Modal_Login'

import '../stylesheets/Header.css';
import Button from './Fields/Button';

class Header extends Component {

    state = {
        isModalVisible_AddCar: false,
        isModalVisible_Register: false,
        isModalVisible_Login: false
      }

    render() {
      return (
            <div className="Header">
                <div className="Header-dashboard">
                    <div className="Header-logo">
                        <p>Auto-Moto</p>
                        <p className="luxury">LUXURY</p>
                    </div>
                    <input className="Header-search" type="text" placeholder="Szukaj..." onInput={this.props.onFilter} />
                    <button className="button-filters" onClick={this.toggleFilters}>Filtry</button>
                    <div className="Header__buttons">
                        <Button className="button-yellow" onClick={() => this.showModal('AddCar')} text="Dodaj" />
                        <Button className="button-blue" onClick={() => this.showModal('Register')} text="Zarejestruj" />
                        <Button className="button-blue" onClick={() => this.showModal('Login')} text="Zaloguj" />
                    </div>
                </div>
                {this.state.isModalVisible_AddCar ? <ModalAddCar onCloseModal={this.closeModal} header="Nowe ogłoszenie" /> : null}
                {this.state.isModalVisible_Register ? <ModalRegister onCloseModal={this.closeModal} header="Rejestracja" /> : null}
                {this.state.isModalVisible_Login ? <ModalLogin onCloseModal={this.closeModal} header="Logowanie" /> : null}
                <Filters />
            </div>
        );
    }

    toggleFilters = () => {
        const filtersDiv = document.querySelector('.Filters')
        if (filtersDiv.classList.contains('Filters--visible')) {
            filtersDiv.classList.remove('Filters--visible')
            filtersDiv.classList.add('Filters--hidden')
        } else {
            filtersDiv.classList.remove('Filters--hidden')
            filtersDiv.classList.add('Filters--visible')
        }
    }

    closeModal = () => {
        document.body.style = 'overflow: initial; padding-right: 0px;'
        this.setState (
          {
            isModalVisible_AddCar: false,
            isModalVisible_Register: false,
            isModalVisible_Login: false
          }
        )
      }
    
      showModal = modal => {
        document.body.style = 'overflow: hidden; padding-right: 15px;'
        this.setState (
          {
            [`isModalVisible_${modal}`]: true
          }
        )
      }
}

export default Header;