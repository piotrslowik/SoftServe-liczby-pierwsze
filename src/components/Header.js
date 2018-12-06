import React, { Component } from 'react';

import Filters from './Filters'

import '../stylesheets/Header.css';

class Header extends Component {
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
                        <button className="button-add" onClick={this.props.onShowModal}>Dodaj</button>
                        <button className="button-register">Zarejestruj</button>
                        <button className="button-login">Zaloguj</button>
                    </div>
                </div>
                <Filters />
            </div>
        );
    }
}

export default Header;