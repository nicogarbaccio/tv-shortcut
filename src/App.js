import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import Recommendations from './Recommendations';
import Reviews from './Reviews';

function App() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/shows")
    .then((r) => r.json())
    .then(data => setShows(data))
  }, []);

  console.log(shows);
  const displayedShows = shows.filter((show) =>
    show.title.toLowerCase().includes(search.toLowerCase()) ||
    show.genres.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <NavBar setSearch={setSearch}/>
      <Switch>
        <Route exact path="/">
          <Main shows={displayedShows} />
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
