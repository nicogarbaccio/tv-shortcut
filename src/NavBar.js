import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from "react-router-dom"

function NavBar ( {setSearch, isDarkMode, onDarkModeClick} ) {

    return (
        <nav>
            <h1>TV Shortcut</h1>
            <SearchBar  setSearch={setSearch}/>
            <NavLink className="home" to ="/">Home</NavLink>
            <NavLink className="yourList"exact to ="/YourList">Your List</NavLink>
            <NavLink className="addShow"exact to ="/AddShow">Add a Show</NavLink>
            <NavLink className="recommendations"exact to ="/Recommendations">Recommendations</NavLink>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </nav>
    )
}

export default NavBar;
