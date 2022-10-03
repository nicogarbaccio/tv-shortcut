import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import Recommendations from './Recommendations';
import Reviews from './Reviews';

function App() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
    .then((r) => r.json())
    .then(data => setShows(data))
  }, [])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Main shows={shows} />
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
