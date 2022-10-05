import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import NavBar from './NavBar';
import YourList from './YourList';
import AddShow from './AddShow';

function App() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  function handleAddShow(newShow) {
    setShows([...shows, newShow]);
  }

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <NavBar isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} setSearch={setSearch}/>
      <Switch>
        <Route exact path="/">
          <Main shows={displayedShows} updateList={updateList} />
        </Route>
        <Route exact path="/YourList">
          <YourList shows={displayedShows} updateList={updateList} />
        </Route>
        <Route exact path="/AddShow">
          <AddShow handleAddShow={handleAddShow} />
        </Route>
      </Switch>
   
    </div>
  );
}

export default App;
