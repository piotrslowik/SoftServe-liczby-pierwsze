import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NewOffer from './pages/NewOffer';
import Offer from './pages/Offer';
import Error404 from './pages/Error404';

import DataContext from './context/data-context';

import { getFuels } from './logic/graphql/fuel';
import { getOrigins } from './logic/graphql/origin';
import { getMakes } from './logic/graphql/make';

import './stylesheets/App.scss';

const App = () => {
  const [fuels, setFuels] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fuels = await getFuels();
        const origins = await getOrigins();
        const makes = await getMakes();
        setFuels(fuels);
        setOrigins(origins);
        setMakes(makes);
      }
      catch (error) {
        throw error;
      }
    })();
  }, [])

  return (
    <Router>
      <DataContext.Provider value={{fuels, origins, makes}}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/offer" component={NewOffer} />
          <Route exact path="/offer/:offerId" component={Offer} />
          <Route exact path="/404" component={Error404} />
          <Redirect to="/404" />
        </Switch>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
