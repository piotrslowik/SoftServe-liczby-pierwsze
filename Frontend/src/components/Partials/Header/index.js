import React, { Component } from 'react';

import Filters from '../Filters';
// import ModalAddCar from '../../Modals/AddCar';
import ModalRegister from '../../Modals/Register';
import ModalLogin from '../../Modals/Login';
import ModalAdmin from '../../Modals/Admin';

import Button from '../../Shared/Fields/Button';
import Logo from '../../Shared/Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

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
                    <Logo className="Header-logo"/>
                    <input className="Header-search" type="text" placeholder="Szukaj..." onInput={this.props.onFilter} />
                    <button className="button-filters" onClick={this.toggleFilters}>
                      <FontAwesomeIcon className="button-filters__text--mobile" icon={faSlidersH} />
                      <span className="button-filters__text--desktop">Filtry</span>
                    </button>
                    <button className="Header__menu-button--mobile">
                      <FontAwesomeIcon icon={faBars} className="Header__menu-button-text--bars" />
                      <FontAwesomeIcon icon={faTimes} className="Header__menu-button-text--close" />
                    </button>
                    <div className="Header__buttons">
                        <Button modifier="yellow" onClick={() => this.showModal('AddCar')} text="Dodaj" />
                        <Button modifier="blue" onClick={() => this.showModal('Register')} text="Zarejestruj" />
                        <Button modifier="blue" onClick={() => this.showModal('Login')} text="Zaloguj" />
                    </div>
                </div>
                {this.state.isModalVisible_AddCar
                  // ? <ModalAddCar onCloseModal={this.closeModal} header="Nowe ogłoszenie" />
                  ? <ModalAdmin onCloseModal={this.closeModal} header="Panel administratora" />
                  : null}
                {this.state.isModalVisible_Register
                  ? <ModalRegister onCloseModal={this.closeModal} header="Rejestracja" />
                  : null}
                {this.state.isModalVisible_Login
                  ? <ModalLogin onCloseModal={this.closeModal} header="Logowanie" />
                  : null}
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
        document.body.style = 'overflow: initial;';
        this.setState (
          {
            isModalVisible_AddCar: false,
            isModalVisible_Register: false,
            isModalVisible_Login: false
          }
        )
      }
    
      showModal = modal => {
        document.body.style = 'overflow: hidden; padding-right: 20px;';
        this.setState (
          {
            [`isModalVisible_${modal}`]: true
          }
        )
      }
}

export default Header;