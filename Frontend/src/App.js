import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NewOffer from './pages/NewOffer';
import Offer from './pages/Offer';
import Error404 from './pages/Error404';

import './stylesheets/App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/offer" component={NewOffer} />
        <Route exact path="/offer/:offerId" component={Offer} />
        <Route exact path="/404" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
