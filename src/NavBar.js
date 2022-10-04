import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from "react-router-dom"


function NavBar ( {setSearch} ) {

    return (
        <nav>
            <h1>TV Shortcut</h1>
            <SearchBar setSearch={setSearch}/>
            <NavLink to ="/">Home</NavLink>
            <NavLink exact to ="/Recommendations">Your List</NavLink>
            <NavLink exact to ="/Reviews">Add a Show</NavLink>
        </nav>
    )
}

export default NavBar;
