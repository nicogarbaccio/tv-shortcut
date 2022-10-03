import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import Recommendations from './Recommendations';
import Reviews from './Reviews';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/Recommendations">
          <Recommendations />
        </Route>
        <Route exact path="/Reviews">
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
