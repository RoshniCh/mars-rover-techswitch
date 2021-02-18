import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './Home/Home';
import { Curiosity } from './Curiosity/curiosity';
import { RoverSelection } from './RoverSelection/RoverSelection';
import './App.scss';
import { Spirit } from './Spirit/spirit';
import { Opportunity } from './Opportunity/opportunity';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rovers/curiosity">
          <Curiosity />
        </Route>
        <Route exact path="/rovers/spirit">
          <Spirit />
        </Route>
        <Route exact path="/rovers/opportunity">
          <Opportunity />
        </Route>
        <Route exact path="/rovers">
          <RoverSelection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
