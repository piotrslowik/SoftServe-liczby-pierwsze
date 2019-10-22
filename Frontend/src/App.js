import React, { Component } from 'react'

import Header from './components/Partials/Header'
import Body from './components/Partials/Body'
import Footer from './components/Partials/Footer'

import './stylesheets/App.scss';

class App extends Component {

  state = {
    filterInput: ''
  }

  handleFilter = (e) => {
    this.setState (
      {
        filterInput: e.target.value
      }
    )
  }

  render() {
    return (
        <div className="App flex-column-center">
            <Header onFilter={this.handleFilter} onShowModal={() => this.showModal('AddCar')}/>
            <Body filterInput={this.state.filterInput} />
            <Footer />
        </div>
    );
  }
}

export default App;
