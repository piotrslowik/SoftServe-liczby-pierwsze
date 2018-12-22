import React, { Component } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

import './stylesheets/App.css';

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
        <div className="App">
            <Header onFilter={this.handleFilter} onShowModal={() => this.showModal('AddCar')}/>
            <Body filterInput={this.state.filterInput} />
            <Footer />
        </div>
    );
  }
}

export default App;
