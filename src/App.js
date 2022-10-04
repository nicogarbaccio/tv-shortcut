import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import Recommendations from './Recommendations';
import Reviews from './Reviews';
import SearchBar from './SearchBar';
import Show from './Show';

function App() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
    .then((r) => r.json())
    .then(data => setShows(data))
  }, []);

  const displayTVShows = shows.filter(show => 
    show.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <NavBar setSearch={setSearch}/>
      <Switch>
        <Route exact path="/">
          <Main shows={displayTVShows} />
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
