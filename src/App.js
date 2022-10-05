import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import NavBar from './NavBar';
import YourList from './YourList';
import Reviews from './Reviews';
import AddShow from './AddShow';

function App() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/shows")
    .then((r) => r.json())
    .then(data => setShows(data))
  }, []);

  function updateList(showObj) {
    const updatedArray = shows.map((show) => {
      if (show.id === showObj.id) {
        return showObj;
      } else {
        return show;
      }
    })
    setShows(updatedArray);
  }

  const displayedShows = shows.filter((show) =>
    show.title.toLowerCase().includes(search.toLowerCase()) ||
    show.genres.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <NavBar setSearch={setSearch}/>
      <Switch>
        <Route exact path="/">
          <Main shows={displayedShows} updateList={updateList} />
        </Route>
        <Route exact path="/YourList">
          <YourList shows={displayedShows} updateList={updateList} />
        </Route>
        <Route exact path="/AddShow">
          <AddShow />
        </Route>
        <Route exact path="/Reviews">
          <Reviews />
        </Route>
      </Switch>
   
    </div>
  );
}

export default App;
