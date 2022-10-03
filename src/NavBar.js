import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav>
            <h1>TV Shortcut</h1>
            <SearchBar />
            <NavLink to ="/">Home</NavLink>
            <NavLink exact to ="/Recommendations">Recommendations</NavLink>
            <NavLink exact to ="/Reviews">Reviews</NavLink>
        </nav>
    )
}

export default NavBar;
