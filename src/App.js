import React, { Component } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ModalAddCar from './components/Modals/Modal_AddCar'

import './stylesheets/App.css';

class App extends Component {

  state = {
    filterInput: '',
    isAddCarModalVisible: false
  }

  handleFilter = (e) => {
    this.setState (
      {
        filterInput: e.target.value
      }
    )
  }

  closeModal = () => {
    document.body.style = 'overflow: initial; padding-right: 0px;'
    this.setState (
      {
        isAddCarModalVisible: false
      }
    )
  }

  showModal = () => {
    document.body.style = 'overflow: hidden; padding-right: 15px;'
    this.setState (
      {
        isAddCarModalVisible: true
      }
    )
  }

  render() {
    return (
        <div className="App">
            <Header onFilter={this.handleFilter} onShowModal={this.showModal}/>
            <Body filterInput={this.state.filterInput} />
            <Footer />
            {this.state.isAddCarModalVisible ? <ModalAddCar onCloseModal={this.closeModal} /> : null}
        </div>
    );
  }
}

export default App;
